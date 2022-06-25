import type { NextPage } from 'next'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export const InstructionForEnglishWithImages: NextPage = () => {
  const { lang } = useTranslation('votes_to_unite_attacks')

  return (
    <>
      {lang === 'en' && (
        <>
          <div className="pb-0">
            <h2 className="w-full text-2xl font-bold pb-8 text-center underline underline-offset-4">
              How to vote
            </h2>
          </div>

          <h2 className="w-full text-2xl font-bold pb-8 text-center underline underline-offset-4">
            ①～②
          </h2>

          <Image
            src="/images/unite_attack_voting_en_01.png"
            alt="unite_attack_voting_en_01"
            width="750"
            height="1477"
          />

          <div className="my-6" />
          <div className="divider" />
          <div className="my-6" />

          <h2 className="w-full text-2xl font-bold pb-8 text-center underline underline-offset-4">
            ③～④
          </h2>

          <Image
            src="/images/unite_attack_voting_en_02.png"
            alt="unite_attack_voting_en_02"
            width="750"
            height="1477"
          />

          <div className="my-6" />
          <div className="divider" />
          <div className="my-6" />

          <h2 className="w-full text-2xl font-bold pb-8 text-center underline underline-offset-4">
            ⑤
          </h2>

          <Image
            src="/images/unite_attack_voting_en_03.png"
            alt="unite_attack_voting_en_03"
            width="750"
            height="1477"
          />

          <div className="divider" />
          <div className="my-6" />
        </>
      )}
    </>
  )
}
