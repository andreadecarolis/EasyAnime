import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Anime,
  GetLatestAnimeListResponse,
  GetPopularAnimeListResponse,
  GetTrendingAnimeListResponse,
} from "@/types/common.types";
import { HttpResponseFailure } from "@/types/httpRequest.types";

export interface AppState {
  trendingAnimeList: Anime[];
  popularAnimeList: Anime[];
  latestAnimeList: Anime[];
  loading: boolean;
  error?: number;
}

const initialState: AppState = {
  trendingAnimeList: [],
  popularAnimeList: [],
  latestAnimeList: [],
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
      state.trendingAnimeList = action.payload.data.Page.media;
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
      state.popularAnimeList = action.payload.data.Page.media;
      state.loading = false;
      state.error = undefined;
    },
    getPopularAnimeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
      state.loading = false;
      state.error = action.payload.status;
    },
    /* #endregion */
    /* #region getLatestAnimeList */
    getLatestAnimeListRequest: (state) => {
      state.loading = true;
    },
    getLatestAnimeListSuccess: (state, action: PayloadAction<GetLatestAnimeListResponse>) => {
      state.latestAnimeList = action.payload.data.Page.media;
      state.loading = false;
      state.error = undefined;
    },
    getLatestAnimeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
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
  getLatestAnimeListRequest,
  getLatestAnimeListSuccess,
  getLatestAnimeListFailure,
} = appSlice.actions;
export default appSlice.reducer;
