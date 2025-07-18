import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Anime,
  Episode,
  GetAiringSoonEpisodeListResponse,
  GetPopularAnimeListResponse,
  GetSearchAnimeListResponse,
  GetSearchAnimeListArgs,
  GetTrendingAnimeListResponse,
} from "@/types/common.types";
import { HttpResponseFailure } from "@/types/httpRequest.types";
import { filterAnimeListByPopularity, filterEpisodeListByPopularity } from "@/utils/common.utils";

export interface AppState {
  selectedAnime: Anime | null;
  trendingAnimeList: Anime[];
  popularAnimeList: Anime[];
  airingSoonEpisodeList: Episode[];
  searchAnimeList: Anime[];
  loading: boolean;
  error?: number;
}

const initialState: AppState = {
  selectedAnime: null,
  trendingAnimeList: [],
  popularAnimeList: [],
  airingSoonEpisodeList: [],
  searchAnimeList: [],
  loading: false,
  error: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /* #region anime */
    setSelectedAnime: (state, action: PayloadAction<Anime | null>) => {
      state.selectedAnime = action.payload;
    },
    /* #endregion */
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
    /* #region getSearchAnimeList */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSearchAnimeListRequest: (state, _action: PayloadAction<GetSearchAnimeListArgs>) => {
      state.loading = true;
    },
    getSearchAnimeListSuccess: (state, action: PayloadAction<GetSearchAnimeListResponse>) => {
      state.searchAnimeList = action.payload.data.Page.media;
      state.loading = false;
      state.error = undefined;
    },
    getSearchAnimeListFailure: (state, action: PayloadAction<HttpResponseFailure>) => {
      state.loading = false;
      state.error = action.payload.status;
    },
    /* #endregion */
  },
});

export const {
  setSelectedAnime,
  getTrendingAnimeListRequest,
  getTrendingAnimeListSuccess,
  getTrendingAnimeListFailure,
  getPopularAnimeListRequest,
  getPopularAnimeListSuccess,
  getPopularAnimeListFailure,
  getAiringSoonEpisodeListRequest,
  getAiringSoonEpisodeListSuccess,
  getAiringSoonEpisodeListFailure,
  getSearchAnimeListRequest,
  getSearchAnimeListSuccess,
  getSearchAnimeListFailure,
} = appSlice.actions;
export default appSlice.reducer;
