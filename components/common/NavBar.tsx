import type { NextPage } from 'next'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const NavBar: NextPage = () => {
  const commonTranslation = useTranslation('common')

  const languages = [
    { id: 1, name: '日本語', value: 'ja' },
    { id: 2, name: 'English', value: 'en' },
  ]

  const listLanguages = languages.map((language) => (
    <option key={language.id} value={language.value}>
      {language.name}
    </option>
  ))

  const changeLanguage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    switch (e.target.value) {
      case 'ja':
        location.href = location.pathname
          .replace(/^\/en/, '/')
          .replace(/^\/\//, '/')
        break
      case 'en':
        location.href = `/en${location.pathname}`
        break
      default:
        location.href = '/'
        break
    }
  }

  return (
    <>
      <div className="navbar bg-neutral text-white sticky top-0 z-50">
        <div className="text-xl pl-4 font-zen-old-mincho">
          <Link href="/" passHref>
            {commonTranslation.t('幻水総選挙2022')}
          </Link>
        </div>

        <div className="absolute right-20 bg-neutral text-white">
          <select
            className="select select-bordered select-sm bg-neutral text-white"
            defaultValue={commonTranslation.lang}
            onChange={changeLanguage}
          >
            {listLanguages}
          </select>
        </div>
      </div>
    </>
  )
}
