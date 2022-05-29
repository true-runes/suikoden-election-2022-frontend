import type { NextPage } from 'next'
import { useLocale } from '../hooks/useLocale'

const HowToVote: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {locale === 'ja' ? '投票方法' : 'Voting methods'}
            </h1>

            <div>
              <p className="text-base text-left pb-4">
                {locale === 'ja'
                  ? '以下の2つのうち、いずれかの方法での投票をお願いします。'
                  : 'Please use one of the following two methods to vote.'}
              </p>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '方法1: ツイート投票'
                  : 'Method 1: Vote by tweeting'}
              </h2>
              <div className="text-base text-left pb-4">
                {locale === 'ja' ? (
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      指定のハッシュタグをつけて、ツイートで投票してください。
                    </li>
                    <li className="pb-2">
                      タグ名や具体的なツイート内容は各部門の説明をご参照ください。
                    </li>
                  </ul>
                ) : (
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      Please vote with the designated hashtag in your tweet.
                    </li>
                    <li className="pb-2">
                      Please refer to the explanation in each section for the
                      tweet&apos;s hashtag and contents.
                    </li>
                  </ul>
                )}
              </div>

              <h2 className="text-xl font-bold pb-4">
                {locale === 'ja'
                  ? '方法2: DM投票'
                  : 'Method 2: Vote by DM (direct message)'}
              </h2>
              <div className="text-base text-left pb-4">
                {locale === 'ja' ? (
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      非公開アカウント（鍵付き）の方や、鍵を開けたり閉めたりする方は、主催宛DMで投票してください。
                    </li>
                    <li className="pb-2">
                      公開アカウントの方もDM投票が可能です。
                    </li>
                  </ul>
                ) : (
                  <ul className="list-disc pl-6 pr-2">
                    <li className="pb-2">
                      People with private (locked) accounts or people who lock
                      and unlock their accounts, please vote by sending a DM to
                      the organizer.
                    </li>
                    <li className="pb-2">
                      People with public accounts can also vote by DM.
                    </li>
                  </ul>
                )}
              </div>
              <h1 className="text-lg font-bold pb-4">
                {locale === 'ja'
                  ? '※注: 投票時だけ公開アカウントにしたい場合'
                  : '*Note: If you want to make your account public only during the voting period'}
              </h1>
              <p className="text-left pb-4">
                {locale === 'ja'
                  ? '「普段は非公開だけど、投票の時だけ公開アカウントにして投票したい」という方は、下記の手順で投票をお願いします。'
                  : 'If you normally have a private account but want to vote as a public account during the voting period, please follow the steps below to vote.'}
              </p>
              <div className="text-base text-left pb-4">
                {locale === 'ja' ? (
                  <ul className="list-decimal pl-6 pr-2">
                    <li className="pb-2">
                      投票前にアカウントを公開状態にする。
                    </li>
                    <li className="pb-2">
                      ツイート投票後、専用ページで「投票チェック」をする（チェック方法は後日ご案内します）。
                    </li>
                    <li className="pb-2">
                      2022/7/3（日）23:59まで公開アカウントのままにする。
                    </li>
                  </ul>
                ) : (
                  <ul className="list-decimal pl-6 pr-2">
                    <li className="pb-2">
                      Before voting, make your account public
                    </li>
                    <li className="pb-2">
                      After voting by tweet, check your vote on the dedicated
                      page (instructions on how to check your vote will be
                      posted at a later date).
                    </li>
                    <li className="pb-2">
                      Leave your account public until 2022 July 3 (Sun) 23:59
                      (JST).
                    </li>
                  </ul>
                )}
              </div>
              <p className="text-base text-left">
                {locale === 'ja'
                  ? '※集計漏れを防ぐため、途中で鍵をかける可能性がある方はDM投票を推奨します。'
                  : '*To prevent votes being missed during tallying, we recommend that people who may lock their accounts during the voting period vote by DM.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToVote
