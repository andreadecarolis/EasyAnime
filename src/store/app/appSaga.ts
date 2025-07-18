import { call, put, takeLatest } from "redux-saga/effects";
import { ANILIST_API_URL } from "@/consts/common.consts";
import {
  GetLatestAnimeListPayload,
  GetLatestAnimeListResponse,
  GetLatestAnimeListResponseSchema,
  GetPopularAnimeListPayload,
  GetPopularAnimeListResponse,
  GetPopularAnimeListResponseSchema,
  GetTrendingAnimeListPayload,
  GetTrendingAnimeListResponse,
  GetTrendingAnimeListResponseSchema,
} from "@/types/common.types";
import { HttpResponseFailure } from "@/types/httpRequest.types";
import { handleHttpRequest } from "@/utils/httpRequest.utils";
import {
  getLatestAnimeListFailure,
  getLatestAnimeListRequest,
  getLatestAnimeListSuccess,
  getPopularAnimeListFailure,
  getPopularAnimeListRequest,
  getPopularAnimeListSuccess,
  getTrendingAnimeListFailure,
  getTrendingAnimeListRequest,
  getTrendingAnimeListSuccess,
} from "./appSlice";
import { getCurrentSeason } from "@/utils/common.utils";

/* #region getTrendingAnimeList */
function* onGetTrendingAnimeListSuccess(successResponse: GetTrendingAnimeListResponse) {
  yield put(getTrendingAnimeListSuccess(successResponse));
}

function* onGetTrendingAnimeListFailure(failureResponse: HttpResponseFailure) {
  yield put(getTrendingAnimeListFailure(failureResponse));
}

function* handleGetTrendingAnimeList() {
  yield call(
    handleHttpRequest<GetTrendingAnimeListPayload, GetTrendingAnimeListResponse>,
    {
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query ($season: MediaSeason, $seasonYear: Int) {
            Page(perPage: 10) {
              media(season: $season, seasonYear: $seasonYear, type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
                id
                title {
                  romaji
                  english
                  native
                }
                status
                genres
                averageScore
                episodes
                coverImage {
                  extraLarge
                  large
                  medium
                }
              }
            }
          }
        `,
        variables: {
          season: getCurrentSeason(),
          seasonYear: new Date().getFullYear(),
        },
      },
    },
    GetTrendingAnimeListResponseSchema,
    onGetTrendingAnimeListSuccess,
    onGetTrendingAnimeListFailure,
  );
}
/* #endregion */

/* #region getPopularAnimeList */
function* onGetPopularAnimeListSuccess(successResponse: GetPopularAnimeListResponse) {
  yield put(getPopularAnimeListSuccess(successResponse));
}

function* onGetPopularAnimeListFailure(failureResponse: HttpResponseFailure) {
  yield put(getPopularAnimeListFailure(failureResponse));
}

function* handleGetPopularAnimeList() {
  yield call(
    handleHttpRequest<GetPopularAnimeListPayload, GetPopularAnimeListResponse>,
    {
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query TopRatedAnime {
            Page(perPage: 10) {
              media(type: ANIME, sort: SCORE_DESC, isAdult: false) {
                id
                title {
                  romaji
                  english
                  native
                }
                status
                genres
                averageScore
                episodes
                coverImage {
                  extraLarge
                  large
                  medium
                }
              }
            }
          }
        `,
        variables: {},
      },
    },
    GetPopularAnimeListResponseSchema,
    onGetPopularAnimeListSuccess,
    onGetPopularAnimeListFailure,
  );
}
/* #endregion */

/* #region getLatestAnimeList */
function* onGetLatestAnimeListSuccess(successResponse: GetLatestAnimeListResponse) {
  yield put(getLatestAnimeListSuccess(successResponse));
}

function* onGetLatestAnimeListFailure(failureResponse: HttpResponseFailure) {
  yield put(getLatestAnimeListFailure(failureResponse));
}

function* handleGetLatestAnimeList() {
  yield call(
    handleHttpRequest<GetLatestAnimeListPayload, GetLatestAnimeListResponse>,
    {
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query NewestAnime {
            Page(perPage: 10) {
              media(type: ANIME, sort: ID_DESC, episodes_greater: 0, averageScore_greater: 0, isAdult: false) {
                id
                title {
                  romaji
                  english
                  native
                }
                status
                genres
                averageScore
                episodes
                coverImage {
                  extraLarge
                  large
                  medium
                }
              }
            }
          }
        `,
        variables: {},
      },
    },
    GetLatestAnimeListResponseSchema,
    onGetLatestAnimeListSuccess,
    onGetLatestAnimeListFailure,
  );
}
/* #endregion */

export default function* appSaga() {
  yield takeLatest(getTrendingAnimeListRequest, handleGetTrendingAnimeList);
  yield takeLatest(getPopularAnimeListRequest, handleGetPopularAnimeList);
  yield takeLatest(getLatestAnimeListRequest, handleGetLatestAnimeList);
}
