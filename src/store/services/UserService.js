import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BACK_END}),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user
      })
    }),
    forgotPassword: build.mutation({
      query: (identifier) => ({
        url: '/forgot-password',
        method: 'POST',
        body: identifier
      })
    }),
    confirmForgotPassword: build.mutation({
      query: (data) => ({
        url: '/confirm-forgot-password',
        method: 'POST',
        body: data
      })
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: '/reset-password',
        method: 'POST',
        body: data
      })
    }),
  })
})

export default userAPI;