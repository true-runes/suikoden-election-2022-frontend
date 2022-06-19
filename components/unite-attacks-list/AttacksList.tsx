import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

type attack = {
  id: number
  name: string
  name_en: string
  character_names: string
  page_annotation: string
}

type apiResponse = {
  [key: string]: attack[]
}

type Props = {
  apiResponse: apiResponse
}

export const AttacksList: NextPage<Props> = ({ apiResponse }) => {
  const { lang } = useTranslation('')

  const titleNames = Object.keys(apiResponse)

  return (
    <>
      {titleNames.map((title: string) => {
        return (
          <>
            <h2 className="text-xl font-bold pb-8 text-center" key={title}>
              {title}
            </h2>
            <div>
              <div className="pb-8 max-w-md">
                <ul className="list text-left pl-24 pr-24 max-w-md">
                  {apiResponse[title].map((attack: attack) => {
                    return (
                      <li key={attack.id} className="pb-4">
                        <span>
                          {lang === 'ja' ? attack.name : attack.name_en}
                        </span>
                        <br />
                        <span className="text-xs">
                          {attack.character_names}
                        </span>
                        <br />
                        <span className="text-xs">
                          {attack.page_annotation}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
