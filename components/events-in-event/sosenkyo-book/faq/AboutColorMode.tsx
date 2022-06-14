import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const AboutColorMode: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <div className="py-2">
        <li className="pb-2">
          <div className="pb-2">
            Q. 使用するソフトで CMYKカラー や psd保存 ができません。
          </div>
          <div className="pb-2">
            <div className="pb-1">
              A. データによっては jpg や png
              でもお受けしますのでご相談ください。カラーモードについては主催側での変換も承ります。
            </div>
            <div className="pb-1">
              ただし、CMYKへの変換を行なうと、色の見た目が変わることがありますのでご注意ください（一般的には、鮮やかな色がくすんだ色に変わります）。
            </div>
          </div>
        </li>
      </div>
    </>
  )
}
