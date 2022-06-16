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

export const Main: NextPage = () => {
  const [titleName, setTitleName] = useState('')
  const [uniteAttackName, setUniteAttackName] = useState('')
  const [tweetText, setTweetText] = useState('')
  const [targetUniteAttacks, setTargetUniteAttacks] = useState([] as any)

  // FIXME: targetUniteAttacks の型定義
  // [
  //   {
  //     "id": 1,
  //     "name": "幻水1",
  //     "characterNames": [
  //       "キャラ1",
  //       "キャラ2"
  //     ]
  //   },
  // ]

  const updateTitleName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitleName(event.target.value)

    // FIXME: idやkeyを使ってうまく書き直す（対応表があるといい）
    switch (event.target.value) {
      case '幻想水滸伝':
        setTargetUniteAttacks(uniteAttacksSuikoden1)
        break
      case '幻想水滸伝II':
        setTargetUniteAttacks(uniteAttacksSuikoden2)
        break
      case '幻想水滸伝III':
        setTargetUniteAttacks(uniteAttacksSuikoden3)
        break
      case '幻想水滸伝IV':
        setTargetUniteAttacks(uniteAttacksSuikoden4)
        break
      case 'ラプソディア':
        setTargetUniteAttacks(uniteAttacksRhapsodia)
        break
      case '幻想水滸伝V':
        setTargetUniteAttacks(uniteAttacksSuikoden5)
        break
      case '幻想水滸伝ティアクライス':
        setTargetUniteAttacks(uniteAttacksSuikodenTk)
        break
      case '幻想水滸伝 紡がれし百年の時':
        setTargetUniteAttacks(uniteAttacksSuikodenTsumutoki)
        break
      default:
        console.log('作品名に対応したデータが見つかりませんでした。')
    }
  }

  // TODO: useEffect を条件ごとに分割したい…
  useEffect(() => {
    const updatedTweetText = `
${titleName}
${uniteAttackName}
#幻水総選挙2022協力攻撃部門
`
    setTweetText(updatedTweetText)
  }, [titleName, uniteAttackName])

  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
                「協力攻撃部門」投票テンプレ
              </h1>

              <div className="pb-0">
                <ul className="list-disc text-left pl-6 pr-2">
                  <li className="pb-2">たぶん説明が入る</li>
                  <li className="pb-2">たぶん説明が入る</li>
                  <li className="pb-2">たぶん説明が入る</li>
                </ul>
              </div>

              <div className="divider" />

              {/* TODO: コンポーネント化する */}
              <div className="pb-10">
                <h2 className="text-xl font-bold pb-8 text-center">作品名</h2>
                <div>
                  <select
                    className="select select-accent w-full max-w-xs bg-white text-black"
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

              {/* TODO: コンポーネント化する */}
              <div className="pb-10">
                <h2 className="text-xl font-bold pb-8 text-center">
                  {titleName === '' ? null : `${titleName} の 協力攻撃一覧`}
                </h2>
                <div>
                  <div className="pb-0 w-full">
                    {/* TODO: コンポーネント化する。作品名に応じて渡す props を変えれば良さそう（要propsバケツリレー） */}
                    {/* FIXME: item の型をつける */}
                    <ul className="list text-left pl-6 pr-2 w-full">
                      {targetUniteAttacks.map((item: any) => (
                        <li key={item.id} className="pb-2">
                          <label
                            htmlFor={`${item.id}`}
                            className="checkbox-label"
                          >
                            <input
                              id={`${item.id}`}
                              data-theme="light"
                              key={item.id}
                              value={item.name}
                              type="radio"
                              name="radio-4"
                              className="radio radio-accent mr-4  checked:bg-blue-500"
                              onChange={(e) =>
                                setUniteAttackName(e.target.value)
                              }
                            />
                            <label htmlFor={`${item.id}`}>
                              <span className="align-top">{item.name}</span>
                            </label>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* TODO: コンポーネント化する */}
              <div className="pb-10">
                {/* TODO: 押下条件の設定（バリデーション）-> ボタンを出さない */}
                {/* FIXME: 改行が含まれないっぽいので要修正（別途変数にまとめる？） */}
                <a
                  href={`https://twitter.com/intent/tweet?text=テストツイートです。${tweetText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="btn btn-outline btn-secondary"
                    disabled={titleName === ''}
                  >
                    ツイートの雛形を生成する（ツイッターアプリへ）
                  </button>
                </a>
              </div>

              <div className="pb-10">
                <CopyToClipboard text={tweetText}>
                  <button
                    className="btn btn-outline btn-secondary"
                    disabled={titleName === ''}
                  >
                    ツイートの雛形テキストをクリップボードへコピーする
                  </button>
                </CopyToClipboard>
              </div>

              <div>
                Debug: {titleName}
                <br />
                Debug: {uniteAttackName}
                <br />
              </div>

              <div
                className="card w-96 bg-base-100 shadow-xl"
                data-theme="light"
              >
                <div className="card-body">
                  <h2 className="card-title">ツイート雛形</h2>
                  <pre className="text-left">{tweetText}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
