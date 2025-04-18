import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseURL'

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/products`,
        credentials: 'include',
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: ({category, color, minPrice, maxPrice, page=1, limit= 10}) => {
                const queryParams = new URLSearchParams({
                    category: category || '',
                    color : color || '',
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || '',
                    page: page.toString(),
                    limit: limit.toString(),
                }).toString()
                return `/?${queryParams}`
            },
            providesTags: ["Products"]
        })
    })
})