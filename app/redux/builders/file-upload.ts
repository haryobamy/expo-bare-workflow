import { TAppEndpointBuilder } from './types';

export const fileEndpoints = (builder: TAppEndpointBuilder) => ({
  createFile: builder.mutation<any, any>({
    query: (data) => ({
      url: 'files',
      method: 'POST',
      body: data,
    }),
    invalidatesTags: ['Files'],
    async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
      try {
        const res = await queryFulfilled;
        const result = res?.data;
        // if (result.status === true) {
        //   dispatch(setWalletAccount(res?.data?.data));
        // }
      } catch (error) {}
    },
  }),

  getAllFiles: builder.query<any, unknown>({
    query: () => ({
      url: 'files',
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    }),
    providesTags: ['Files'],
    async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
      try {
        const res = await queryFulfilled;
        const result = res?.data;
        console.log({ result });
      } catch (error: any) {
        console.log(error);
      }
    },
  }),

  createFolder: builder.mutation<any, any>({
    query: (data) => ({
      url: 'folders',
      method: 'POST',
      body: data,
    }),
    invalidatesTags: ['Folders'],
    async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
      try {
        const res = await queryFulfilled;
        const result = res?.data;
        // if (result.status === true) {
        //   dispatch(setWalletAccount(res?.data?.data));
        // }
      } catch (error) {}
    },
  }),

  getAllFolders: builder.query<any, any>({
    query: () => ({
      url: 'folders',
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    }),
    providesTags: ['Folders'],

    async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
      try {
        const res = await queryFulfilled;
        const result = res?.data;
        console.log({ result });
      } catch (error: any) {
        console.log(error);
      }
    },
  }),
  getAllFolderById: builder.query<any, string>({
    query: (id) => ({
      url: `folders/${id}`,
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    }),
    providesTags: ['Folders'],

    async onQueryStarted(arg: any, { dispatch, queryFulfilled }: any) {
      try {
        const res = await queryFulfilled;
        const result = res?.data;
        console.log({ result });
      } catch (error: any) {
        console.log(error);
      }
    },
  }),
});
