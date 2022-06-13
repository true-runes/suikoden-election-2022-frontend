import type { NextPage } from 'next'
import TwitterIcon from '@/components/svg/TwitterIcon'
import ExternalLink from '@/components/svg/ExternalLink'
import useTranslation from 'next-translate/useTranslation'

export const IllustratedBy: NextPage = () => {
  const { t } = useTranslation('common_illustrated_by')

  return (
    <>
      <div className="text-base text-center">
        <p className="pb-4 font-bold underline text-xl font-zen-old-mincho">
          {t('イラストご協力')}
        </p>
        <span>
          <span className="pr-1">
            <TwitterIcon />
          </span>
          {t('まみた様')} ({' '}
          <a
            href="https://twitter.com/mamita404"
            target="_blank"
            rel="noreferrer"
            className="link link-hover underline-offset-4"
          >
            @mamita404
          </a>
          <span className="pl-1">
            <ExternalLink />
          </span>{' '}
          )
        </span>
      </div>
    </>
  )
}
