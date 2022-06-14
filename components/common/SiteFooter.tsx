import type { NextPage } from 'next'
import TwitterIcon from '@/components/svg/TwitterIcon'
import ExternalLink from '@/components/svg/ExternalLink'
import useTranslation from 'next-translate/useTranslation'

export const SiteFooter: NextPage = () => {
  const commonTranslation = useTranslation('common')

  return (
    <>
      <footer className="footer footer-center bg-white text-black pb-6">
        <div className="text-base py-4">
          <div>
            <span>
              <span className="pr-1">
                <TwitterIcon />
              </span>
              {commonTranslation.t('幻水総選挙2022')} ({' '}
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
