import type { NextPage } from 'next'
import TwitterIcon from '../components/Svg/TwitterIcon'
import ExternalLink from '../components/Svg/ExternalLink'

const IllustratedBy: NextPage = () => {
  return (
    <>
      <div className="text-base text-center">
        <p className="pb-4 font-bold underline text-xl font-zen-old-mincho">
          イラストご協力
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
