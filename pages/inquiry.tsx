import type { NextPage } from 'next'
import Link from 'next/link'

import HumbergerNavigation from '../components/HumbergerMenu/HumbergerNavigation'
import NavBar from '../components/NavBar'
import SiteFooter from '../components/SiteFooter'

import { useLocale } from '../hooks/useLocale'

const Inquiry: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <title>{`お問い合わせ - ${t.WEBSITE_TITLE}`}</title>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <NavBar />
        <div className="text-base bg-gray-700 text-white breadcrumbs pl-6 pb-2 sticky top-16 z-50">
          <ul>
            <li>
              <Link href="/" passHref>
                {t.PAGE_TITLE_HOME}
              </Link>
            </li>
            <li>お問い合わせ</li>
          </ul>
        </div>
        <div className="bg-white text-black">
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-2xl font-bold pb-4 underline font-zen-old-mincho">
                  お問い合わせ
                </h1>
                <div className="text-left py-4">
                  質問やご相談がありましたら、
                  <a
                    href="https://twitter.com/gensosenkyo"
                    target="_blank"
                    rel="noreferrer"
                    className="link link-hover underline-offset-4"
                  >
                    <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                      主催Twitter
                    </span>
                  </a>
                  宛のリプライ・DMでお気軽にご連絡ください。
                </div>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter isHideOtoiawaseComponent={true} />
      </main>
    </div>
  )
}

export default Inquiry
