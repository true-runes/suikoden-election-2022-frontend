import type { NextPage } from 'next'
import { InformationCircle } from '@/components/svg/InformationCircle'
import ExternalLink from '@/components/svg/ExternalLink'

export const LinkToEnglishTranslationDocument: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              <span>
                English translation
                <span
                  className="tooltip tooltip-success"
                  data-tip="Thank you, anon!"
                >
                  <InformationCircle />
                </span>
              </span>
            </h1>

            <div>
              <div className="text-base text-left mb-4">
                The English translation on the site is not yet complete and we
                prepared in text format (Google Docs).
              </div>
              <div className="text-base text-left mb-4">
                Please note that it may not be up to date with the latest
                information.
              </div>
              <div className="text-lg text-center">
                <a
                  href="https://docs.google.com/document/d/1AmM4-T9XqQ3HNFENICGCCFnoDTOp6z_1vKnksVoTGjo/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="link link-hover underline-offset-4"
                >
                  <span className="underline underline-offset-4 text-blue-500 hover:text-blue-900 pl-1 pr-1">
                    English translation
                  </span>
                  <span className="pl-1">
                    <ExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
