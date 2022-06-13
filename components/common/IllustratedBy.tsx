import type { NextPage } from 'next'
import TwitterIcon from '@/components/svg/TwitterIcon'
import ExternalLink from '@/components/svg/ExternalLink'
// FIXME: useLocale は消す
import { useLocale } from '@/hooks/useLocale'
import useTranslation from 'next-translate/useTranslation'

const IllustratedBy: NextPage = () => {
  // FIXME: locale は消す
  const { locale } = useLocale()
  const { t } = useTranslation('common_illustrated_by')

  return (
    <>
      <div className="text-base text-center">
        <p className="pb-4 font-bold underline text-xl font-zen-old-mincho">
          {locale === 'ja' ? 'イラストご協力' : 'Illustration by'}
        </p>
        <span>
          <span className="pr-1">
            <TwitterIcon />
          </span>
          まみた様 ({' '}
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

export default IllustratedBy
