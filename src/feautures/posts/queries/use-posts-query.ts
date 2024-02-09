import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../../../shared/api/serverContstants'
import {IPost} from "../types";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], { limit: number, page: number }>({
            query: ({limit, page}) => `/posts?_limit=${limit}&_page=${page}`,
            providesTags: ['Posts']
        }),
        getPostsById: builder.query<IPost, { id: number }>({
            query: ({id}) => `/posts/${id}`,
            providesTags: ['Posts']
        }),
    }),
})

export const {useGetPostsQuery, useGetPostsByIdQuery} = postsApi;
