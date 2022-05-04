import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import HumbergerMenu from '../components/HumbergerMenu'
import KaishiNichizi from '../components/KaishiNichizi'
import OshiSerif from '../components/OshiSerif'
import SenkyoUndou from '../components/SenkyoUndou'
import KaihyoIllustStatus from '../components/KaihyoIllustStatus'
import TouhyouCheck from '../components/TouhyouCheck'

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
        <HumbergerMenu />
      </div>

      <main id="page-wrap">
        {/* TODO: 524KB あるので要検討 */}
        <Image
          src="/gss2021_logo_4k.jpg"
          alt="幻水総選挙2022"
          width={6480}
          height={4320}
        />

        <KaishiNichizi />
        <OshiSerif />
        <SenkyoUndou />
        <KaihyoIllustStatus />
        <TouhyouCheck />
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
