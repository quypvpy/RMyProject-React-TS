import { MainLayout } from '@/components/Layout'
import {
  Decor,
  Information,
  Panel,
  Seller,
  WhatNew,
  Collection,
  Laptop,
  FlashSale,
  AboutPage,
  Search,
} from '../components'
import SimpleSlider from '../components/Panel/slider'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { valueSearchSelector } from '@/components/Layout/Search/selector'
import { ListPage } from './ListPage'
import { useNavigate } from 'react-router-dom'

export interface MainPageProps {}

export function Main(props: MainPageProps) {
  return (
    <MainLayout>
      <Panel></Panel>
      <Information></Information>
      <WhatNew></WhatNew>
      <Collection></Collection>
      <FlashSale></FlashSale>
      <Laptop></Laptop>
      <Decor></Decor>
      {/* <Seller></Seller> */}
    </MainLayout>
  )
}
