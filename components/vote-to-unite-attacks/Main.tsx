import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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

  const updateTitleName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitleName(event.target.value)

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

  // TODO: ハッシュタグは変数にしておく
  // TODO: キャラ名入れたほうがいい場合は入れる (uniteCharacterNames)
  useEffect(() => {
    console.log(uniteCharacterNames)

    const updatedTweetText = `${titleName}
${uniteAttackName}
#幻水総選挙2022協力攻撃
`

    const updatedTweetTextForParameter = `テストツイートです%20テストツイートです%0A${titleName}%0A${uniteAttackName}%0A%23ハッシュタグのテキスト`

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
                  <li className="pb-2">お好きな協力攻撃を選んでください。 </li>
                  <li className="pb-2">投票はお一人様1票（1回）です。</li>
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
                ) : (
                  <div>
                    <div className="pb-0 max-w-md">
                      {/* TODO: item の型をつける */}
                      <ul className="list text-left pl-6 pr-2 max-w-md">
                        {/* 英語版作るときにここでエラーになる */}
                        {targetTitleUniteAttacks.map((item: any) => (
                          <li key={item.id} className="pb-4">
                            <label
                              htmlFor={`${item.id}`}
                              className="checkbox-label"
                            >
                              <input
                                id={`${item.id}`}
                                data-theme="light"
                                key={item.id}
                                value={item.name}
                                checked={uniteAttackName === item.name}
                                type="radio"
                                name="radio-4"
                                className="radio radio-accent mr-4 checked:bg-blue-500"
                                onChange={(e) => {
                                  setUniteAttackName(e.target.value)
                                  setUniteCharacterNames(item.characterNames)
                                }}
                              />
                            </label>
                            <label htmlFor={`${item.id}`}>
                              <span className="align-top">{item.name}</span>
                            </label>
                            <br />
                            <div className="pl-10 text-xs">
                              {/* 英語の場合はここで分岐が必要 */}
                              {/* characterNames.(ja|en)? あまり階層作りたくない。シンプルにしたい */}
                              {/* JaCharacterNames, EnCharacterNames */}
                              {item.characterNames.map(
                                (characterName: string, index: number) => (
                                  <span key={characterName}>
                                    {characterName}
                                    {index !== item.characterNames.length - 1
                                      ? '＆'
                                      : ''}
                                  </span>
                                )
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {uniteAttackName === 'a' ? null : (
                <div>
                  <div className="divider" />

                  <div
                    className="card max-w-2xl bg-emerald-50 shadow-xl"
                    data-theme="light"
                  >
                    <div className="card-body">
                      <h2 className="card-title pb-4">{t('投票内容')}</h2>
                      <pre className="text-left">{tweetText}</pre>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="max-w-full">
                    <div className="pb-10">
                      <button
                        className="w-full btn btn-outline btn-secondary pr-2"
                        disabled={uniteAttackName === ''}
                      >
                        <a
                          href={`https://twitter.com/intent/tweet?text=テストツイートです。${tweetTextForParameter}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span
                            className={
                              uniteAttackName === '' ? 'text-gray-500' : ''
                            }
                          >
                            {t('ツイートで投票する')}
                          </span>
                          <span className="pl-1">
                            <ExternalLink />
                          </span>
                        </a>
                      </button>
                    </div>

                    <div className="pb-0">
                      <CopyToClipboard text={tweetText}>
                        <button
                          className="w-full btn btn-outline btn-secondary"
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

                  <div className="w-80 mt-6 ml-6 text-left">
                    <span className="text-red-500 font-bold">
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
                    </span>
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
