import { ReactElement, ReactNode } from 'react'
import axiosClient from './axiosClient'
const categoryApi = {
  getAll(params?: any) {
    const url = '/categories'
    return axiosClient.get(url, { params })
  },
  async getCount(params?: any) {
    // Transform _page to _start
    const newParams = { ...params }
    newParams._start =
      !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50)
    // Remove un-needed key
    delete newParams._page
    // Fetch product list + count
    const productList = await axiosClient.get('/products', {
      params: newParams,
    })
    const count = await axiosClient.get('/products/count', {
      params: newParams,
    })
    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    }
  },
  get(id?: any) {
    const url = `/categories/${id}`
    return axiosClient.get(url)
  },
  add(data?: any) {
    const url = '/categories'
    return axiosClient.post(url, data)
  },
  update(data: any) {
    const url = `/categories/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id?: any) {
    const url = `/categories/${id}`
    return axiosClient.delete(url)
  },
}
export default categoryApi
