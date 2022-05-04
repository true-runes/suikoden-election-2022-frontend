import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { scaleRotate as Menu } from 'react-burger-menu'

const Home: NextPage = () => {
  return (
    // tailwind の container でくくる
    <div>
      {/* <div id="outer-container"> */}
      <Head>
        {/* TODO: 環境によってテキストを変える（「開発環境」であることを明示する） */}
        <title>幻水総選挙2022</title>
      </Head>

      <div className={'right'}>
        {/* TODO: outer-container は再検討 */}
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <p>幻水総選挙2022</p>
          <a className="bm-item menu-item" href="https://example.com/">
            this page1!
          </a>
          <a className="bm-item menu-item" href="https://example.com/">
            this page2!
          </a>
          <a className="bm-item menu-item" href="https://example.com/">
            this page3!
          </a>
          <a className="bm-item menu-item" href="https://example.com/">
            this page4!
          </a>
        </Menu>
      </div>

      <main id="page-wrap">
        {/* TODO: 524KB あるので要検討 */}
        <Image
          src="/gss2021_logo_4k.jpg"
          alt="幻水総選挙2022"
          width={6480}
          height={4320}
        />

        <p>コンポーネント</p>
        <p>コンポーネント</p>
        <p>コンポーネント</p>
        <p>コンポーネント</p>
        <p>コンポーネント</p>
      </main>
      <StyledFooter>（フッタコンポーネント）幻水総選挙2022</StyledFooter>
    </div>
  )
}

const StyledFooter = styled.footer`
  font-weight: bold;
`

const StyledOuterContainer = styled.div`
  position: relative;
  right: 0;
  height: 130px;
  background: #a90000;
`

export default Home
