import type { NextPage } from 'next'
import { useLocale } from '../hooks/useLocale'

const Onegai: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold pb-10 underline font-zen-old-mincho">
              {locale === 'ja' ? 'お願い' : 'Please'}
            </h1>

            <div>
              <div className="text-base text-left pb-4">
                <ul className="list-disc pl-6 pr-2">
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '投票は各部門につき、お一人様1回です。'
                      : 'Each person votes one time per category'}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? 'ツイート投票、あるいはDM投票のどちらかでのみ投票できます。'
                      : 'You can vote only by tweet or by DM.'}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '明らかに同じ方からの複数投票がありました場合は、無効にさせていただく可能性がございます。'
                      : 'Obviously if we receive multiple votes from the same person, their votes may be invalidated.'}
                    <br />
                    {locale === 'ja'
                      ? '推しへの清き投票にご協力よろしくお願いいたします！一生のお願いだよ。'
                      : "Please help us by voting clearly/correctly for your favorites! We're begging you!"}
                  </li>
                  <li className="pb-2">
                    {locale === 'ja'
                      ? '幻水総選挙関連のハッシュタグで、特定のキャラや特定のキャラを推す方への批判・悪口を目的としたツイートは、ご遠慮くださいますようお願い致します。'
                      : 'Please refrain from using the Suikoden General Election hashtags for criticizing or badmouthing specific characters or people who are fans of specific characters.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onegai
