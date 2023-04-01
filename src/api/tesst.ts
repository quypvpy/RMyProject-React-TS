import { ReactElement, ReactNode } from 'react'
import axiosClient from './axiosClient'
const testApi = {
  getAll(params?: any) {
    const url = '/products'
    return axiosClient.get(url, { params })
  },
  get(id?: any) {
    const url = `/products/${id}`
    return axiosClient.get(url)
  },
  add(data?: any) {
    const url = '/products'
    return axiosClient.post(url, data)
  },
  update(data: any) {
    const url = `/products/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id?: any) {
    const url = `/products/${id}`
    return axiosClient.delete(url)
  },
}
export default testApi
