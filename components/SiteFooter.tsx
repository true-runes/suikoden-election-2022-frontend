import type { NextPage } from 'next'
import TwitterIcon from '../components/Svg/TwitterIcon'
import ExternalLink from '../components/Svg/ExternalLink'
import { useLocale } from '../hooks/useLocale'

import Otoiawase from '../components/Otoiawase'

const SiteFooter: NextPage = (props) => {
  const { t } = useLocale()

  return (
    <>
      {props.isHideOtoiawaseComponent ? null : (
        <>
          <Otoiawase /> <div className="divider" />
        </>
      )}

      <footer className="footer footer-center bg-white text-black pb-6">
        <div className="text-base py-4">
          <span className="pb-1">
            <span className="pr-1">
              <TwitterIcon />
            </span>
            {t.WEBSITE_TITLE} ({' '}
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
              className="link link-hover underline-offset-4"
            >
              @gensosenkyo
            </a>
            <span className="pl-1">
              <ExternalLink />
            </span>{' '}
            )
          </span>
          <span className="pb-1">© 2022 幻水総選挙2022</span>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
