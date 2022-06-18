import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
  const [titleName, setTitleName] = useState('')
  const [uniteAttackName, setUniteAttackName] = useState('')
  const [tweetText, setTweetText] = useState('')
  const [tweetTextForParameter, setTweetTextForParameter] = useState('')
  const [targetTitleUniteAttacks, setTargetTitleUniteAttacks] = useState(
    [] as UniteAttack[]
  )

  const updateTitleName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitleName(event.target.value)

    // TODO: 型定義
    const titleNameVsUniteAttacksArray: any = {
      幻想水滸伝: uniteAttacksSuikoden1.attacks,
      幻想水滸伝II: uniteAttacksSuikoden2.attacks,
      幻想水滸伝III: uniteAttacksSuikoden3.attacks,
      幻想水滸伝IV: uniteAttacksSuikoden4.attacks,
      ラプソディア: uniteAttacksRhapsodia.attacks,
      幻想水滸伝V: uniteAttacksSuikoden5.attacks,
      幻想水滸伝ティアクライス: uniteAttacksSuikodenTk.attacks,
      '幻想水滸伝 紡がれし百年の時': uniteAttacksSuikodenTsumutoki.attacks,
    }

    if (titleNameVsUniteAttacksArray) {
      setTargetTitleUniteAttacks(
        titleNameVsUniteAttacksArray[event.target.value]
      )
    }

    setUniteAttackName('')
  }

  // TODO: ハッシュタグは変数化する
  useEffect(() => {
    const updatedTweetText = `${titleName}
${uniteAttackName}
#幻水総選挙2022協力攻撃
`

    const updatedTweetTextForParameter = `テストツイートです%20テストツイートです%0A${titleName}%0A${uniteAttackName}%0A%23ハッシュタグのテキスト`

    setTweetText(updatedTweetText)
    setTweetTextForParameter(updatedTweetTextForParameter)
  }, [titleName, uniteAttackName])

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
                  <li className="pb-2">投票はお一人様1票です。</li>
                </ul>
              </div>

              <div className="divider" />

              <div className="pb-10">
                <h2 className="w-full text-xl font-bold pb-8 text-center">
                  作品名
                </h2>
                <div>
                  <select
                    className="select select-accent max-w-md bg-white text-black"
                    defaultValue="default-value"
                    onChange={(e) => updateTitleName(e)}
                  >
                    <option disabled value="default-value">
                      作品名を選択して下さい
                    </option>
                    {titleNames.map((titleName) => (
                      <option key={titleName.id} value={titleName.ja}>
                        {titleName.ja}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pb-0">
                <h2 className="text-xl font-bold pb-8 text-center">
                  協力攻撃一覧
                </h2>
                <div>
                  <div className="pb-0 max-w-md">
                    {/* TODO: item の型をつける */}
                    <ul className="list text-left pl-6 pr-2 max-w-md">
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
                              onChange={(e) =>
                                setUniteAttackName(e.target.value)
                              }
                            />
                          </label>
                          <label htmlFor={`${item.id}`}>
                            <span className="align-top">{item.name}</span>
                          </label>
                          <br />
                          <div className="pl-10 text-xs">
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
              </div>

              {uniteAttackName === '' ? null : (
                <div>
                  <div className="divider" />

                  <div
                    className="card max-w-2xl bg-emerald-50 shadow-xl"
                    data-theme="light"
                  >
                    <div className="card-body">
                      <h2 className="card-title pb-4">ツイート雛形</h2>
                      <pre className="text-left">{tweetText}</pre>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="max-w-full">
                    <div className="pb-10">
                      <a
                        href={`https://twitter.com/intent/tweet?text=テストツイートです。${tweetTextForParameter}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="w-full btn btn-outline btn-secondary">
                          ツイート雛形をツイートする（ツイッターへ）
                        </button>
                      </a>
                    </div>

                    <div className="pb-0">
                      <CopyToClipboard text={tweetText}>
                        <button className="w-full btn btn-outline btn-secondary">
                          ツイート雛形をクリップボードへコピーする
                        </button>
                      </CopyToClipboard>
                    </div>
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
