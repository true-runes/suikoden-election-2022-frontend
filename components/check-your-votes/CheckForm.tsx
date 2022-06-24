import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

import { ResultEachHashtag } from '@/components/check-your-votes/ResultEachHashtag'
import { ResultDescription } from '@/components/check-your-votes/ResultDescription'

export const CheckForm: NextPage = () => {
  const [isInitialState, setIsInitialState] = useState(true)
  const [screenName, setScreenName] = useState('')
  const [screenNameForResult, setScreenNameForResult] = useState('')
  const [nowLoading, setNowLoading] = useState(false)

  const [gss2022, setGss2022] = useState([])
  const [uniteAttacks, setUniteAttacks] = useState([])
  // const [shortStories, setShortStories] = useState([])
  // const [favQuotes, setFavQuotes] = useState([])
  // const [sosenkyoCampaigns, setSosenkyoCampaigns] = useState([])

  const changeScreenName = (e: any) => {
    setScreenName(e.target.value)
  }

  const clickCheckButton = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_CHECK_YOUR_VOTE_API ||
      'https://headquarters.suikoden.info/check_votes_and_bonuses'
    const apiUrl = `${baseUrl}?screen_name=${screenName}`

    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        setGss2022(response.data.gss2022)
        setUniteAttacks(response.data.unite_attacks)
        // setShortStories(response.data.short_stories)
        // setFavQuotes(response.data.fav_quotes)
        // setSosenkyoCampaigns(response.data.sosenkyo_campaigns)

        setScreenNameForResult(screenName)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
        setIsInitialState(false)
      })
  }

  return (
    <>
      <div className="pb-8">
        <div className="text-base">
          <input
            id="screen_name"
            type="text"
            onChange={changeScreenName}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                clickCheckButton()
              }
            }}
            placeholder="gensosenkyo (@は不要です)"
            className="input input-bordered input-accent w-full max-w-full bg-white text-black"
            value={screenName}
          />

          <button
            id="check_button"
            type="submit"
            onClick={clickCheckButton}
            className="mt-4 w-full btn btn-active btn-accent"
            disabled={nowLoading}
          >
            投票チェックする
          </button>
        </div>
      </div>

      <div className="pb-0">
        {isInitialState && !nowLoading ? null : (
          <>
            {nowLoading ? (
              <Image
                src="/images/spinner.gif"
                alt="幻水総選挙スピナー"
                width="47"
                height="47"
              />
            ) : (
              <>
                <ResultDescription screenName={screenNameForResult} />

                <div className="divider" />
                <ResultEachHashtag
                  tweetIds={gss2022}
                  title={'#幻水総選挙2022'}
                />

                <div className="divider" />
                <ResultEachHashtag
                  tweetIds={uniteAttacks}
                  title={'#幻水総選挙2022協力攻撃'}
                />

                {/* <div className="divider" />
                <ResultEachHashtag
                  tweetIds={shortStories}
                  title={'#幻水総選挙お題小説'}
                /> */}

                {/* <div className="divider" />
                <ResultEachHashtag
                  tweetIds={favQuotes}
                  title={'#幻水総選挙推し台詞'}
                /> */}

                {/* <div className="divider" />
                <ResultEachHashtag
                  tweetIds={sosenkyoCampaigns}
                  title={'#幻水総選挙運動'}
                /> */}
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
