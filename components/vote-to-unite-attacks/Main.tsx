import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Main: NextPage = () => {
  // TODO: ソートする
  // TODO: 別ファイルから読み込むようにする

  const titleNames = [
    '幻想水滸伝',
    '幻想水滸伝II',
    '幻想水滸伝III',
    '幻想水滸伝IV',
    'ラプソディア',
    '幻想水滸伝V',
    '幻想水滸伝ティアクライス',
    '幻想水滸伝 紡がれし百年の時',
  ]

  const suikoden1Items = ['幻水1', '幻想水滸伝1', '幻水1の協力攻撃']
  const suikoden2Items = ['幻水2', '幻想水滸伝2', '幻水2の協力攻撃']
  const suikoden3Items = ['幻水3', '幻想水滸伝3', '幻水3の協力攻撃']
  const suikoden4Items = ['幻水4', '幻想水滸伝4', '幻水4の協力攻撃']
  const suikoden5Items = ['幻水5', '幻想水滸伝5', '幻水5の協力攻撃']
  const suikodenTkItems = ['幻水TK', '幻想水滸伝TK', '幻水TKの協力攻撃']
  const suikodenTsumuTokiItems = [
    '幻水紡時',
    '幻想水滸伝紡時',
    '幻水紡時の協力攻撃',
  ]

  const rhapsodiaItems = [
    '忍者攻撃',
    '海賊攻撃',
    '親子攻撃',
    '付き人攻撃',
    'お姫様攻撃',
    '海賊親子攻撃',
    '麗しの友情攻撃',
    '新・騎士団攻撃',
    'アイスクラッシュ攻撃',
    '美青年攻撃',
    '美女攻撃',
    '美少女攻撃',
    '真・忍者攻撃',
    'ニャー？攻撃',
    '乱れ撃ち攻撃',
    '槍攻撃',
    '腐れ縁攻撃',
    '大剣攻撃',
    'オベル軍攻撃',
    '遺志を継ぐもの攻撃',
    '元・騎士団攻撃',
    '海族団攻撃',
    '魔法使い攻撃',
    '火炎陣',
    '雷神',
    '風烈牙',
    '水竜',
    '焦土',
    'Ｗリーダー攻撃',
    '双剣攻撃',
    '真・友情攻撃',
    '飛行部隊攻撃',
    '騎馬部隊攻撃',
  ]

  const [titleName, setTitleName] = useState('')
  const [uniteAttackName, setUniteAttackName] = useState('')
  const [tweetText, setTweetText] = useState('')
  const [targetUniteAttacks, setTargetUniteAttacks] = useState([] as string[])

  const updateTitleName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitleName(event.target.value)

    console.log('updateTitleName')

    switch (event.target.value) {
      case '幻想水滸伝':
        setTargetUniteAttacks(suikoden1Items)
        break
      case '幻想水滸伝II':
        setTargetUniteAttacks(suikoden2Items)
        break
      case '幻想水滸伝III':
        setTargetUniteAttacks(suikoden3Items)
        break
      case '幻想水滸伝IV':
        setTargetUniteAttacks(suikoden4Items)
        break
      case 'ラプソディア':
        setTargetUniteAttacks(rhapsodiaItems)
        break
      case '幻想水滸伝V':
        setTargetUniteAttacks(suikoden5Items)
        break
      case '幻想水滸伝ティアクライス':
        setTargetUniteAttacks(suikodenTkItems)
        break
      case '幻想水滸伝 紡がれし百年の時':
        setTargetUniteAttacks(suikodenTsumuTokiItems)
        break
      default:
        console.log('default!')
    }
  }

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
                      <option key={titleName} value={titleName}>
                        {titleName}
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
                    <ul className="list text-left pl-6 pr-2 w-full">
                      {targetUniteAttacks.map((item, index) => (
                        <li key={index} className="pb-2">
                          <label htmlFor={`${item}`} className="checkbox-label">
                            <input
                              data-theme="light"
                              key={index}
                              value={item}
                              type="radio"
                              name="radio-4"
                              className="radio radio-accent mr-4  checked:bg-blue-500"
                              onChange={(e) =>
                                setUniteAttackName(e.target.value)
                              }
                            />
                            <span className="align-top">{item}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* TODO: コンポーネント化する */}
              <div className="pb-10">
                {/* TODO: 押下条件の設定（バリデーション） */}
                {/* TODO: 改行が含まれないっぽいので要修正 */}
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
