import { z } from "zod";
import { call } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  ExtraOptions,
  HttpRequest,
  HttpResponse,
  HttpResponseFailure,
  HttpResponseFailureSchema,
} from "@/types/httpRequest.types";

/**
 * Executes an HTTP POST request to the specified API endpoint.
 *
 * The function takes an `HttpRequest` object containing the request code and payload.
 * It returns a Promise of an AxiosResponse, which is the response of the HTTP request.
 *
 * @template P - The type of the payload
 * @template R - The type of the expected response, extending HttpResponse
 *
 * @param {HttpRequest<P>} httpRequest - The HTTP request object containing the request code and payload
 * @returns {Promise<AxiosResponse<R>>} - APromise of an AxiosResponse, which is the response of the HTTP request
 */
export async function fetchHttpRequest<P, R extends HttpResponse>(
  httpRequest: HttpRequest<P>,
): Promise<AxiosResponse<R>> {
  const response = await axios.post<R>(
    httpRequest.requestCode,
    {
      ...httpRequest.payload,
      token: httpRequest.token,
    },
    { headers: { "Content-Type": "application/json" } },
  );

  return response;
}

/**
 * Validates an HTTP response against a given schema and executes the `onSuccess` callback if valid.
 *
 * This generator function attempts to parse the response using the provided Zod schema.
 * If successful, it logs the success and executes the `onSuccess` callback with it.
 * If the response does not match the expected schema, it tries to parse it as an error response.
 * If the error response is valid, it throws an `HttpResponseError` with the error data, otherwise it throws it with default data.
 *
 * @template R - The type of the expected response, extending HttpResponse
 *
 * @param {any} response - The HTTP response to be validated
 * @param {z.ZodType<R>} responseSchema - The Zod schema used to validate the expected response
 * @param {(response: R, request?: string) => Generator} onSuccess - The callback to be executed with the parsed response data on successful validation
 * @param {string} actionId - The string representation of the current action
 * @param {string | undefined} notification - The notification message to be displayed
 * @returns {Generator} - A generator object
 *
 * @throws {HttpResponseError} If the response is a error response
 */
export function* validateHttpResponse<R extends HttpResponse>(
  response: any,
  responseSchema: z.ZodType<R>,
  onSuccess: (response: R, request?: string) => Generator,
  notification?: string,
): Generator {
  const parsed = responseSchema.safeParse(response);
  if (parsed.success && parsed.data.status === 200) {
    yield call(onSuccess, parsed.data);
    if (notification) {
      console.log(notification, "success");
    }
    return;
  }

  const failParsed = HttpResponseFailureSchema.safeParse(response);
  if (failParsed.success) {
    throw new HttpResponseError(failParsed.data);
  } else {
    throw new HttpResponseError({ status: 9001 });
  }
}

/**
 * Validates an HTTP response error.
 *
 * It logs the error and executes the `onFailure` callback with it.
 *
 * @param {HttpResponseError} response - The HTTP response error to be validated
 * @param {(error: HttpResponseFailure) => Generator} onFailure - The callback to be executed with the parsed error data on successful validation
 * @param {string | undefined} notification - The notification message to be displayed
 * @returns {Generator} - A generator object
 */
export function* validateHttpResponseFailure(
  response: HttpResponseError,
  onFailure: (error: HttpResponseFailure) => Generator,
  notification?: string,
): Generator {
  yield call(onFailure, response.data);
  if (notification) {
    console.log(notification, "error");
  }
}

/**
 * Executes an HTTP request and validates the response against a given schema.
 *
 * The function takes an `HttpRequest` object containing the request code and payload,
 * a Zod schema used to validate the expected response, and two callbacks:
 * onSuccess is executed with the parsed response data if the response is valid,
 * and onFailure is executed with the parsed error data if the response is invalid.
 *
 * @template P - The type of the payload
 * @template R - The type of the expected response, extending HttpResponse
 *
 * @param {HttpRequest<P>} httpRequest - The HTTP request object containing the request code and payload
 * @param {z.ZodType<R>} responseSchema - The Zod schema used to validate the expected response
 * @param {(response: R) => Generator} onSuccess - The callback to be executed with the parsed response data on successful validation
 * @param {(error: HttpResponseFailure) => Generator} onFailure - The callback to be executed with the parsed error data on failure
 * @param {ExtraOptions | undefined} extraOptions - Optional extra options for the request like toast messages
 */
export function* handleHttpRequest<P, R extends HttpResponse>(
  httpRequest: HttpRequest<P>,
  responseSchema: z.ZodType<R>,
  onSuccess: (response: R) => Generator,
  onFailure: (error: HttpResponseFailure) => Generator,
  extraOptions?: ExtraOptions,
) {
  try {
    const response: AxiosResponse<R> = yield call(fetchHttpRequest<P, R>, httpRequest);
    yield call(
      validateHttpResponse<R>,
      { ...response.data, status: response.status },
      responseSchema,
      onSuccess,
      (extraOptions?.notification ?? {}).onSuccessMessage,
    );
  } catch (error: any) {
    yield call(validateHttpResponseFailure, error, onFailure, (extraOptions?.notification ?? {}).onFailureMessage);
  }
}

class HttpResponseError extends Error {
  data: HttpResponseFailure;

  constructor(data: HttpResponseFailure) {
    super();
    this.data = data;
  }
}
