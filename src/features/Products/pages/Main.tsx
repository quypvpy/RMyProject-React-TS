import { MainLayout } from '@/components/Layout'
import { Collection, Decor, FlashSale, Information, Laptop, Panel, WhatNew } from '../components'

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
