import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

import { ResultEachHashtag } from '@/components/check-your-votes/ResultEachHashtag'

export const CheckForm: NextPage = () => {
  const [screenName, setScreenName] = useState('')
  const [nowLoading, setNowLoading] = useState(false)

  const [gss2022, setGss2022] = useState([])
  const [uniteAttacks, setUniteAttacks] = useState([])
  const [shortStories, setShortStories] = useState([])
  const [favQuotes, setFavQuotes] = useState([])
  const [sosenkyoCampaigns, setSosenkyoCampaigns] = useState([])

  const changeScreenName = (e: any) => {
    setScreenName(e.target.value)
  }

  const clickCheckButton = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_CHECK_YOUR_VOTE_API ||
      'https://headquarters.suikoden.info/check_votes_and_bonuses'
    const apiUrl = `${baseUrl}?screen_name=${screenName}`

    console.log(apiUrl)
    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        setGss2022(response.data.gss2022)
        setUniteAttacks(response.data.unite_attacks)
        setShortStories(response.data.short_stories)
        setFavQuotes(response.data.fav_quotes)
        setSosenkyoCampaigns(response.data.sosenkyo_campaigns)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setNowLoading(false)
      })
  }

  return (
    <>
      <div className="pb-8">
        <h2 className="text-xl font-bold pb-4">チェックするところ</h2>
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
            placeholder="@gensosenkyo"
            className="input input-bordered input-accent w-full max-w-full bg-white text-black"
            value={screenName}
          />

          <button
            id="check_button"
            type="submit"
            onClick={clickCheckButton}
            className="mt-4 w-full btn btn-outline btn-secondary"
            disabled={nowLoading}
          >
            投票チェックする
          </button>
        </div>
      </div>
      <div className="pb-8">
        <h2 className="text-xl font-bold pb-4">結果が出るところ</h2>
        {nowLoading ? (
          <Image
            src="/images/spinner.gif"
            alt="幻水総選挙スピナー"
            width="47"
            height="47"
          />
        ) : (
          <>
            <p>#幻水総選挙2022</p>
            <ResultEachHashtag tweetIds={gss2022} />
            <p>#幻水総選挙2022協力攻撃</p>
            <ResultEachHashtag tweetIds={uniteAttacks} />
            <p>#幻水総選挙お題小説</p>
            <ResultEachHashtag tweetIds={shortStories} />
            <p>#幻水総選挙推し台詞</p>
            <ResultEachHashtag tweetIds={favQuotes} />
            <p>#幻水総選挙運動</p>
            <ResultEachHashtag tweetIds={sosenkyoCampaigns} />
          </>
        )}
      </div>
    </>
  )
}
