import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Publication: NextPage = () => {
  // const { t } = useTranslation('sosenkyo_book')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">開票イラストの掲載について</h2>
      <div className="text-base text-left pb-4">
        <div className="pb-4">
          お送りいただいた開票イラストのうち、
          <span className="text-red-500">掲載許可をくださった方の作品</span>
          を収録させていただきます。
        </div>
        <ul className="list-disc pl-6 pr-2">
          <li className="pb-2">
            お送りいただいた全ての方にお声がけいたしますが、本への掲載を強要するものではありません。
          </li>
          <li className="pb-2">
            規定に沿っていればどの開票イラストでも掲載可能です。
          </li>
          <li className="pb-2">
            1ページあたり 2～4枚 程度の掲載を想定しています。
          </li>
          <li className="pb-2">
            参加者様には、完成した本を一冊進呈いたします。
          </li>
        </ul>
      </div>
    </>
  )
}
