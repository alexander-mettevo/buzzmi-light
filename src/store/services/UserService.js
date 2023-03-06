import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    })
  })
})

export default userAPI;