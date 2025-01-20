import { createApi } from '@reduxjs/toolkit/query/react';
import { TApiTag, TAppEndpointBuilder, apiTagTypes } from './builders/types';
import { fileEndpoints } from './builders';
import getBaseQueryWithLogout from './base-query';

const BASE_URL = 'http://localhost:3001/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: getBaseQueryWithLogout(BASE_URL),
  tagTypes: apiTagTypes,
  endpoints: (builder: TAppEndpointBuilder) => ({
    ...fileEndpoints(builder),
  }),
});

export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  useCreateFileMutation,
  useLazyGetAllFilesQuery,
  useGetAllFilesQuery,
  useCreateFolderMutation,
  useGetAllFoldersQuery,
  useLazyGetAllFoldersQuery,
  useGetAllFolderByIdQuery,
  useLazyGetAllFolderByIdQuery,
} = apiSlice;
