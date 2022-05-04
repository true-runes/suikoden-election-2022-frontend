import type { NextPage } from 'next'
import Image from 'next/image'

import HumbergerMenu from '../components/HumbergerMenu'
import KaishiNichizi from '../components/KaishiNichizi'
import OshiSerif from '../components/OshiSerif'
import SenkyoUndou from '../components/SenkyoUndou'
import KaihyoIllustStatus from '../components/KaihyoIllustStatus'
import TouhyouCheck from '../components/TouhyouCheck'
import SiteFooter from '../components/SiteFooter'

const Home: NextPage = () => {
  return (
    // tailwind の container でくくる
    <div>
      {/* <div id="outer-container"> */}
      {/* TODO: 環境によってテキストを変える（「開発環境」であることを明示する） */}
      <title>ホーム - 幻水総選挙2022</title>

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

        <div className="divider" />
        <KaishiNichizi />
        <div className="divider" />
        <OshiSerif />
        <div className="divider" />
        <SenkyoUndou />
        <div className="divider" />
        <KaihyoIllustStatus />
        <div className="divider" />
        <TouhyouCheck />
      </main>

      <SiteFooter />
    </div>
  )
}

export default Home
