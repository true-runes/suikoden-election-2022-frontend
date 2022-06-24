import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'
import Image from 'next/image'

import ExternalLink from '@/components/svg/ExternalLink'

import titleNames from '@/lib/titleNames.json'
import uniteAttacksSuikoden1 from '@/lib/uniteAttacksSuikoden1.json'
import uniteAttacksSuikoden2 from '@/lib/uniteAttacksSuikoden2.json'
import uniteAttacksSuikoden3 from '@/lib/uniteAttacksSuikoden3.json'
import uniteAttacksSuikoden4 from '@/lib/uniteAttacksSuikoden4.json'
import uniteAttacksSuikoden5 from '@/lib/uniteAttacksSuikoden5.json'
import uniteAttacksSuikodenTk from '@/lib/uniteAttacksSuikodenTk.json'
import uniteAttacksSuikodenTsumutoki from '@/lib/uniteAttacksSuikodenTsumutoki.json'
import uniteAttacksRhapsodia from '@/lib/uniteAttacksRhapsodia.json'

type CharacterName = string

type UniteAttack = {
  id: number
  name: string
  characterNames: CharacterName[]
}

export const Main: NextPage = () => {
  const { t, lang } = useTranslation('votes_to_unite_attacks')

  const [titleName, setTitleName] = useState('')
  const [uniteAttackName, setUniteAttackName] = useState('')
  // TODO: キャラ名入れたほうがいい場合は入れる
  const [uniteCharacterNames, setUniteCharacterNames] = useState([])
  const [tweetText, setTweetText] = useState('')
  const [tweetTextForParameter, setTweetTextForParameter] = useState('')
  const [targetTitleUniteAttacks, setTargetTitleUniteAttacks] = useState(
    [] as UniteAttack[]
  )
  const [apiResponse, setApiResponse] = useState([])
  const [nowLoading, setNowLoading] = useState(false)

  const updateTitleName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitleName(event.target.value)

    const titleUrlParams = {
      幻想水滸伝: 's1',
      Suikoden: 's1',
      幻想水滸伝II: 's2',
      'Suikoden II': 's2',
      幻想水滸伝III: 's3',
      'Suikoden III': 's3',
      幻想水滸伝IV: 's4',
      'Suikoden IV': 's4',
      ラプソディア: 'tactics',
      'Suikoden Tactics': 'tactics',
      幻想水滸伝V: 's5',
      'Suikoden V': 's5',
      幻想水滸伝ティアクライス: 'tk',
      'Suikoden Tierkreis': 'tk',
      '幻想水滸伝 紡がれし百年の時': 'woven',
      'Suikoden The Woven Web of a Century': 'woven',
    }[event.target.value]

    const apiEndpoint =
      process.env.NEXT_PUBLIC_UNITE_ATTACKS_API_URL ||
      'https://headquarters.suikoden.info/unite_attacks'
    const apiUrl = `${apiEndpoint}?title=${titleUrlParams}&order=kana`

    setNowLoading(true)

    axios
      .get(apiUrl)
      .then((response) => {
        setApiResponse(response.data)

        setNowLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })

    // TODO: 型定義
    // 各 JSON に titleName(Ja|En) を作るのがベターだとは思う
    const titleNameVsUniteAttacksArray: any = {
      幻想水滸伝: uniteAttacksSuikoden1.attacks,
      Suikoden: uniteAttacksSuikoden1.attacks,
      幻想水滸伝II: uniteAttacksSuikoden2.attacks,
      'Suikoden II': uniteAttacksSuikoden2.attacks,
      幻想水滸伝III: uniteAttacksSuikoden3.attacks,
      'Suikoden III': uniteAttacksSuikoden3.attacks,
      幻想水滸伝IV: uniteAttacksSuikoden4.attacks,
      'Suikoden IV': uniteAttacksSuikoden4.attacks,
      ラプソディア: uniteAttacksRhapsodia.attacks,
      'Suikoden Tactics': uniteAttacksRhapsodia.attacks,
      幻想水滸伝V: uniteAttacksSuikoden5.attacks,
      'Suikoden V': uniteAttacksSuikoden5.attacks,
      幻想水滸伝ティアクライス: uniteAttacksSuikodenTk.attacks,
      'Suikoden Tierkreis': uniteAttacksSuikodenTk.attacks,
      '幻想水滸伝 紡がれし百年の時': uniteAttacksSuikodenTsumutoki.attacks,
      'Suikoden The Woven Web of a Century':
        uniteAttacksSuikodenTsumutoki.attacks,
    }

    if (titleNameVsUniteAttacksArray) {
      setTargetTitleUniteAttacks(
        titleNameVsUniteAttacksArray[event.target.value]
      )
    }

    setUniteAttackName('')
  }

  // TODO: ハッシュタグは変数にしたい
  // TODO: キャラ名入れたほうがいい場合は入れる (uniteCharacterNames)
  useEffect(() => {
    console.log(uniteCharacterNames)

    const updatedTweetText = `${titleName}
${uniteAttackName}
#幻水総選挙2022協力攻撃
`
    // %0A は改行、%23 はパウンド記号、%20 は半角スペース を表す
    const updatedTweetTextForParameter = `${titleName}%0A${uniteAttackName}%0A%23幻水総選挙2022協力攻撃`

    setTweetText(updatedTweetText)
    setTweetTextForParameter(updatedTweetTextForParameter)
  }, [titleName, uniteAttackName, uniteCharacterNames])

  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pt-4 pb-10 underline underline-offset-4 font-zen-old-mincho">
                「協力攻撃部門」投票ページ
              </h1>

              <div className="pb-0">
                <ul className="list-disc text-left pl-6 pr-2">
                  <li className="pb-2">
                    幻水シリーズ
                    <span className="px-1 text-red-500 font-bold">
                      全ての協力攻撃から、1つだけ
                    </span>
                    選んでください。
                  </li>
                  <li className="pb-2">
                    投票は
                    <span className="px-1 text-red-500 font-bold">
                      お一人様1票（1回）
                    </span>
                    です。
                  </li>
                </ul>
              </div>

              <div className="divider" />

              <div className="pb-10">
                <h2 className="w-full text-xl font-bold pb-8 text-center">
                  {t('作品名')}
                </h2>
                <div>
                  <select
                    className="select select-accent max-w-md bg-white text-black"
                    defaultValue="default-value"
                    onChange={(e) => updateTitleName(e)}
                  >
                    <option disabled value="default-value">
                      {t('作品名を選択して下さい')}
                    </option>
                    {titleNames.map((titleName) => (
                      <option
                        key={titleName.id}
                        value={lang === 'ja' ? titleName.ja : titleName.en}
                      >
                        {lang === 'ja' ? titleName.ja : titleName.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pb-0">
                <h2 className="text-xl font-bold pb-8 text-center">
                  {t('協力攻撃一覧')}
                </h2>
                {titleName === '' ? (
                  '？？？？？'
                ) : nowLoading ? (
                  <Image
                    src="/images/spinner.gif"
                    alt="幻水総選挙スピナー"
                    width="47"
                    height="47"
                  />
                ) : (
                  <div>
                    <div className="pb-0 max-w-md">
                      {/* TODO: item の型をつける */}
                      <ul className="list text-left pl-6 pr-2 max-w-md">
                        {apiResponse.map((uniteAttack: any) => (
                          <li key={uniteAttack.id} className="pb-4">
                            <label
                              htmlFor={`${uniteAttack.id}`}
                              className="checkbox-label"
                            >
                              <input
                                id={`${uniteAttack.id}`}
                                data-theme="light"
                                key={uniteAttack.id}
                                value={uniteAttack.name}
                                checked={uniteAttackName === uniteAttack.name}
                                type="radio"
                                name="radio-4"
                                className="radio radio-accent mr-4 checked:bg-blue-500"
                                onChange={(e) => {
                                  setUniteAttackName(e.target.value)
                                  setUniteCharacterNames(
                                    uniteAttack.characterNames
                                  )
                                }}
                              />
                            </label>
                            <label htmlFor={`${uniteAttack.id}`}>
                              <span className="align-top">
                                {lang === 'ja'
                                  ? uniteAttack.name
                                  : uniteAttack.name_en}
                              </span>
                            </label>
                            <br />
                            <span className="pl-10 text-xs">
                              {/* TODO: 英語を用意したい */}
                              {uniteAttack.character_names}
                            </span>
                            {uniteAttack.page_annotation && (
                              <>
                                <br />
                                <span className="pl-10 text-xs">
                                  {/* TODO: 英語を用意したい */}※
                                  {uniteAttack.page_annotation}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="my-8" />

              {uniteAttackName === 'a' ? null : (
                <div>
                  <div className="divider" />
                  <div className="my-8" />

                  {uniteAttackName !== '' && (
                    <div className="my-6 text-xl text-red-500 font-bold">
                      <p className="mb-1">投票は お一人様1票（1回） です。</p>
                      <p>こちらでよろしいですか？</p>
                    </div>
                  )}

                  <div
                    className="card max-w-2xl bg-emerald-50 shadow-xl"
                    data-theme="light"
                  >
                    <div className="card-body">
                      <h2 className="card-title pb-4">{t('投票内容')}</h2>
                      <pre className="text-left">{tweetText}</pre>
                    </div>
                  </div>

                  <div className="my-8" />
                  <div className="divider" />
                  <div className="my-8" />

                  <div className="max-w-full">
                    <div className="pb-10">
                      {/* TODO: 重複部分が多く、やや冗長（a タグ をうまく取り扱いたい） */}
                      {uniteAttackName === '' ? (
                        <button
                          className="w-full btn btn-outline btn-secondary pr-2"
                          disabled
                        >
                          <span className="text-gray-500">
                            {t('ツイートで投票する')}
                          </span>
                          <span className="pl-1">
                            <ExternalLink />
                          </span>
                        </button>
                      ) : (
                        <a
                          href={`https://twitter.com/intent/tweet?text=${tweetTextForParameter}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="w-full btn btn-active btn-accent pr-2">
                            <span>{t('ツイートで投票する')}</span>
                            <span className="pl-1">
                              <ExternalLink />
                            </span>
                          </button>
                        </a>
                      )}
                    </div>

                    <div className="pb-0">
                      <CopyToClipboard text={tweetText}>
                        <button
                          className="w-full btn btn-active btn-accent"
                          disabled={uniteAttackName === ''}
                        >
                          <span
                            className={
                              uniteAttackName === '' ? 'text-gray-500' : ''
                            }
                          >
                            {t('投票内容をコピーする')}
                          </span>
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>

                  <div className="my-8" />
                  <div className="divider" />
                  <div className="my-8" />

                  <div className="ml-6 text-left">
                    <ul className="list-disc text-left pl-2 pr-2">
                      <li className="pb-2 text-red-500 font-bold">
                        鍵アカウントの方は投票内容をコピーし、
                        <a
                          href="https://twitter.com/messages/compose?recipient_id=1471724029"
                          target="_blank"
                          rel="noreferrer"
                          className="link link-hover underline underline-offset-4"
                        >
                          @gensosenkyo宛にDM
                        </a>
                        でお送りください。
                      </li>
                      <li className="pb-2">
                        投票ボタンがうまく動かない方は、投票内容をコピーしたものを手動で貼り付けて、ツイートしてください。
                      </li>
                      <li className="pb-2">
                        ツイートまたはDMをしない限り、集計には反映されません。
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
