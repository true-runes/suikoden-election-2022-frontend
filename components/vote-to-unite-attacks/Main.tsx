import React, { useState } from 'react'
import type { NextPage } from 'next'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Main: NextPage = () => {
  // TODO: ソートする
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

  // tweetText と 攻撃名 は別にしたほうがいいかもしれん
  const [tweetText, setTweetText] = useState('初期値！')

  const updateTweetText = (event: any) => {
    const t = event.target.value

    setTweetText(t)
  }

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
                  <select className="select select-accent w-full max-w-xs bg-white text-black">
                    <option disabled selected>
                      作品名を選択して下さい
                    </option>
                    {/* ここはベタ書きでいい。ここにレンダリングコストを使いたくない */}
                    <option>幻想水滸伝</option>
                    <option>幻想水滸伝II</option>
                    <option>幻想水滸伝III</option>
                    <option>幻想水滸伝IV</option>
                    <option>ラプソディア</option>
                    <option>幻想水滸伝V</option>
                    <option>幻想水滸伝ティアクライス</option>
                    <option>幻想水滸伝 紡がれし百年の時</option>
                  </select>
                </div>
              </div>

              {/* TODO: コンポーネント化する */}
              <div className="pb-10">
                <h2 className="text-xl font-bold pb-8 text-center">
                  協力攻撃名
                </h2>
                <div>
                  <div className="pb-0 w-full">
                    {/* TODO: コンポーネント化する。作品名に応じて渡す props を変えれば良さそう */}
                    <ul className="list text-left pl-6 pr-2 w-full">
                      {rhapsodiaItems.map((item, index) => (
                        <li key={index} className="pb-2">
                          <input
                            id={`${item}`}
                            value={item}
                            type="checkbox"
                            className="checkbox checkbox-accent mr-4 pb-4"
                            onChange={(e) => updateTweetText(e)}
                          />
                          <label htmlFor={`${item}`} className="checkbox-label">
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
                {/* TODO: ツイート内容の動的生成 */}
                <a
                  href={`https://twitter.com/intent/tweet?text=テストツイートです。${tweetText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline btn-secondary">
                    ツイートの雛形を生成する（ツイッターアプリへ）
                  </button>
                </a>
              </div>

              <div>
                <CopyToClipboard text={tweetText}>
                  <button className="btn btn-outline btn-secondary">
                    ツイートの雛形テキストをクリップボードへコピーする
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
