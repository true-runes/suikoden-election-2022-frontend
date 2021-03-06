import type { NextPage } from 'next'
// import useTranslation from 'next-translate/useTranslation'

export const Thanks: NextPage = () => {
  // const { t } = useTranslation('')

  return (
    <>
      <h2 className="text-xl font-bold pb-4">お礼</h2>
      <div className="text-base text-left">
        OPイラスト・CLイラストの作者様には、お礼として各部門「+1票」の追加投票権を進呈いたします。
      </div>
    </>
  )
}
