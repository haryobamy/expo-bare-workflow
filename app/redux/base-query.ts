import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

const getBaseQueryWithLogout = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
  });

  const baseQueryWithLogout: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    return result;
  };

  return baseQueryWithLogout;
};

export default getBaseQueryWithLogout;
