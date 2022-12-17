import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
  headers: {
    "X-RapidAPI-Key": "4b680ea0e6mshbf0db736b930554p1082b3jsn6fb72d8bb91a",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const shazamoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '4b680ea0e6mshbf0db736b930554p1082b3jsn6fb72d8bb91a');

        return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
    useGetTopChartsQuery,
}=shazamoreApi;