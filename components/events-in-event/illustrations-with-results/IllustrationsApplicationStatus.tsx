import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import useTranslation from 'next-translate/useTranslation'

export const IllustrationsApplicationStatus: NextPage = () => {
  // const { t } = useTranslation('')
  const [_apiResponse, setApiResponse] = useState([])
  const [sortedApiResponse, setSortedApiResponse] = useState([])
  const [nowLoading, setNowLoading] = useState(false)

  console.log(process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_URL)
  const apiUrl =
    process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_URL ||
    'localhost'
  const apiKey =
    process.env.NEXT_PUBLIC_ILLUSTRATIONS_APPLICATION_STATUS_API_KEY || ''

  useEffect(() => {
    setNowLoading(true)

    axios
      .get(apiUrl, {
        headers: {
          // GET のみなので API-KEY は露出して問題ない
          'X-MICROCMS-API-KEY': apiKey,
        },
      })
      .then((response) => {
        setApiResponse(response.data.contents)

        const sortedByCharacterName = response.data.contents.sort(
          (a: any, b: any) => {
            return a.characterName < b.characterName ? -1 : 1
          }
        )
        setSortedApiResponse(sortedByCharacterName)

        setNowLoading(false)
      })
  }, [apiKey, apiUrl])

  return (
    <>
      <div className="bg-white text-black">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold pb-8 underline font-zen-old-mincho">
                開票イラスト応募状況
              </h1>

              <div className="bg-yellow-500">
                {/* <!-- modal button --> */}
                {/* <label htmlFor="my-modal" className="btn modal-button"> */}
                <label htmlFor="my-modal-4" className="btn modal-button">
                  見る 👀
                </label>
                {/* <img src="https://preview.redd.it/exm81084k0x41.jpg?auto=webp&s=c26850d8a8781f5e8a4e59cda1ad7c0bb52b4eed" /> */}

                {/* <!-- modal content --> */}
                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle bg-green-500"
                />
                <label
                  // htmlFor="my-modal-4"
                  // className="modal cursor-pointer mx-5 bg-green-500"
                  // className="modal my-24 mx-5"
                  // NOTE: ここで my や mx を取りすぎると、アウトサイドクリックで閉じられなくなる
                  // NOTE: NavBarとの重なりを避けるためだけに mt を設定すべき
                  // NOTE: mt-14 は決め打ち（それ以外だと不細工になる）
                  // NOTE: ここのbg-purpleはAndroidだと無条件で画面全体張り付きっぽい
                  className="modal mt-14 bg-purple-500"
                >
                  {/* <div className="modal overflow-y-auto pt-20 pb-10"> */}
                  {/* <div className="modal-box max-h-max m-auto"> */}
                  {/* <label className="modal-box relative" htmlFor=""> */}
                  {/* FIXME: ハンバーガーのz-indexには負けてる */}
                  {/* <label className="modal-box bg-blue-500" htmlFor=""> */}
                  {/* TODO: relative (position) 指定要る？ */}
                  {/* NOTE: ここのbg-blueはAndroidだと無条件で画面全体張り付きっぽい */}
                  {/* <label className="modal-box my-20 py-10 px-20 bg-blue-500" htmlFor=""> */}
                  {/* modal-box は必須！！！！！！！（スクロールできなくなる） */}
                  {/* NOTE: （重要）そこをタップしたら閉じるエリアを label htmlFor="my-modal-4" でくくる！！！！！ */}
                  {/* NOTE: （重要）そこをタップしたら閉じられたくないエリアを label htmlFor="" でくくる！！！！！ */}
                  <label
                    className="modal-box my-20 py-10 bg-blue-500"
                    htmlFor="my-modal-4"
                    // htmlFor=""
                  >
                    <p>おおおおおおおおおおおおおおおおおお</p>
                    {/* // 以下はコンテンツ表示部分なのでモーダル自体のスタイルにはほぼ無関係 */}
                    {/* <img src="https://preview.redd.it/exm81084k0x41.jpg?auto=webp&s=c26850d8a8781f5e8a4e59cda1ad7c0bb52b4eed" /> */}
                    {/* <div className="modal-action"> */}
                    {/* <label htmlFor="my-modal" className="btn"> */}
                    {/* <label htmlFor="" className="btn"> */}
                    {/* Close */}
                    {/* </label> */}
                    {/* </div> */}
                    {/* bg-red-500 は角の丸部分直角部分の差分の色 */}
                    <div className="overflow-x-auto w-full my-4 bg-red-500">
                      <p>いいいいいいいいいいいいいいいい</p>
                      <label
                        // className="my-20 py-10 px-20 bg-blue-500"
                        className="my-20 py-10 bg-yellow-500"
                        htmlFor=""
                      >
                        <p>えええええええええええええええええええ</p>
                        <table className="table table-normal shadow w-full text-center">
                          <thead>
                            <tr>
                              <th className="bg-white text-black">キャラ名</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {nowLoading ? (
                            <tr>
                              <td></td>
                            </tr>
                          ) : (
                            sortedApiResponse.map((item: any) => {
                              return (
                                <tr key={item.id}>
                                  <td className="bg-white text-black">
                                    {item.characterName}
                                  </td>
                                </tr>
                              )
                            })
                          )} */}
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">
                                ああああああああああああ
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                            <tr>
                              <td className="bg-white text-black">ああああ</td>
                            </tr>
                          </tbody>
                        </table>
                      </label>
                    </div>
                  </label>
                </label>
              </div>

              {/* <div className="overflow-x-auto w-full">
                <table className="table table-normal shadow w-full text-center">
                  <thead>
                    <tr>
                      <th className="bg-white text-black">キャラ名</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nowLoading ? (
                      <tr>
                        <td></td>
                      </tr>
                    ) : (
                      sortedApiResponse.map((item: any) => {
                        return (
                          <tr key={item.id}>
                            <td className="bg-white text-black">
                              {item.characterName}
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
