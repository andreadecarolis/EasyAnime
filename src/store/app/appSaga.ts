import { call, put, takeLatest } from "redux-saga/effects";
import { ANILIST_API_ANIME_REQUEST_FORMAT, ANILIST_API_URL } from "@/consts/common.consts";
import {
  GetAiringSoonEpisodeListPayload,
  GetAiringSoonEpisodeListResponse,
  GetAiringSoonEpisodeListResponseSchema,
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
  getAiringSoonEpisodeListFailure,
  getAiringSoonEpisodeListRequest,
  getAiringSoonEpisodeListSuccess,
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
              media(season: $season, seasonYear: $seasonYear, type: ANIME, isAdult: false, sort: POPULARITY_DESC) {
                ${ANILIST_API_ANIME_REQUEST_FORMAT}
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
              media(type: ANIME, isAdult: false, sort: SCORE_DESC) {
                ${ANILIST_API_ANIME_REQUEST_FORMAT}
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

/* #region getAiringSoonEpisodeList */
function* onGetAiringSoonEpisodeListSuccess(successResponse: GetAiringSoonEpisodeListResponse) {
  yield put(getAiringSoonEpisodeListSuccess(successResponse));
}

function* onGetAiringSoonEpisodeListFailure(failureResponse: HttpResponseFailure) {
  yield put(getAiringSoonEpisodeListFailure(failureResponse));
}

function* handleGetAiringSoonEpisodeList() {
  yield call(
    handleHttpRequest<GetAiringSoonEpisodeListPayload, GetAiringSoonEpisodeListResponse>,
    {
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query {
            Page(perPage: 48) {
              airingSchedules(notYetAired: true, sort: TIME) {
                airingAt
                episode
                media {
                  ${ANILIST_API_ANIME_REQUEST_FORMAT}
                }
              }
            }
          }
        `,
        variables: {},
      },
    },
    GetAiringSoonEpisodeListResponseSchema,
    onGetAiringSoonEpisodeListSuccess,
    onGetAiringSoonEpisodeListFailure,
  );
}
/* #endregion */

export default function* appSaga() {
  yield takeLatest(getTrendingAnimeListRequest, handleGetTrendingAnimeList);
  yield takeLatest(getPopularAnimeListRequest, handleGetPopularAnimeList);
  yield takeLatest(getAiringSoonEpisodeListRequest, handleGetAiringSoonEpisodeList);
}
