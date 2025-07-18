import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Anime,
  Episode,
  GetAiringSoonEpisodeListResponse,
  GetPopularAnimeListResponse,
  GetTrendingAnimeListResponse,
} from "@/types/common.types";
import { HttpResponseFailure } from "@/types/httpRequest.types";
import { filterAnimeListByPopularity, filterEpisodeListByPopularity } from "@/utils/common.utils";

export interface AppState {
  trendingAnimeList: Anime[];
  popularAnimeList: Anime[];
  airingSoonEpisodeList: Episode[];
  loading: boolean;
  error?: number;
}

const initialState: AppState = {
  trendingAnimeList: [],
  popularAnimeList: [],
  airingSoonEpisodeList: [],
  loading: false,
  error: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /* #region getTrendingAnimeList */
    getTrendingAnimeListRequest: (state) => {
      state.loading = true;
    },
    getTrendingAnimeListSuccess: (state, action: PayloadAction<GetTrendingAnimeListResponse>) => {
      state.trendingAnimeList = filterAnimeListByPopularity(action.payload.data.Page.media);
      state.loading = false;
      state.error = undefined;
    },
    getTrendingAnimeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
      state.loading = false;
      state.error = action.payload.status;
    },
    /* #endregion */
    /* #region getPopularAnimeList */
    getPopularAnimeListRequest: (state) => {
      state.loading = true;
    },
    getPopularAnimeListSuccess: (state, action: PayloadAction<GetPopularAnimeListResponse>) => {
      state.popularAnimeList = filterAnimeListByPopularity(action.payload.data.Page.media);
      state.loading = false;
      state.error = undefined;
    },
    getPopularAnimeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
      state.loading = false;
      state.error = action.payload.status;
    },
    /* #endregion */
    /* #region getAiringSoonEpisodeList */
    getAiringSoonEpisodeListRequest: (state) => {
      state.loading = true;
    },
    getAiringSoonEpisodeListSuccess: (state, action: PayloadAction<GetAiringSoonEpisodeListResponse>) => {
      state.airingSoonEpisodeList = filterEpisodeListByPopularity(action.payload.data.Page.airingSchedules);
      state.loading = false;
      state.error = undefined;
    },
    getAiringSoonEpisodeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
      state.loading = false;
      state.error = action.payload.status;
    },
    /* #endregion */
  },
});

export const {
  getTrendingAnimeListRequest,
  getTrendingAnimeListSuccess,
  getTrendingAnimeListFailure,
  getPopularAnimeListRequest,
  getPopularAnimeListSuccess,
  getPopularAnimeListFailure,
  getAiringSoonEpisodeListRequest,
  getAiringSoonEpisodeListSuccess,
  getAiringSoonEpisodeListFailure,
} = appSlice.actions;
export default appSlice.reducer;
