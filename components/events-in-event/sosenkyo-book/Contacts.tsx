import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

const Contacts: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">連絡先</h2>
      <div className="text-base text-left pb-0">
        <ul className="list-disc pl-6 pr-2 pb-0">
          <li className="pb-2">
            <div className="pb-2">主催</div>

            <ul className="pl-6 pr-2 pb-0">
              <li className="pb-2">
                幻水総選挙管理委員会 （代表：佐倉キネコ）
              </li>
            </ul>
          </li>

          <li className="pb-2">
            <div className="pb-2">メールアドレス</div>

            <ul className="pl-6 pr-2 pb-0">
              <li className="pb-2">gensosenkyo2015@gmail.com</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contacts
