import type { NextPage } from 'next'
import TwitterIcon from '@/components/svg/TwitterIcon'
import ExternalLink from '@/components/svg/ExternalLink'
import { useLocale } from '@/hooks/useLocale'
// import useTranslation from 'next-translate/useTranslation'

const SiteFooter: NextPage = () => {
  const { t } = useLocale()
  // const { t } = useTranslation('common_site_footer')

  return (
    <>
      <footer className="footer footer-center bg-white text-black pb-6">
        <div className="text-base py-4">
          <div>
            <span>
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
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
