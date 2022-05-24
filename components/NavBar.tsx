import type { NextPage } from 'next'
import Link from 'next/link'

import { useLocale } from '../hooks/useLocale'

const NavBar: NextPage = () => {
  const { t, locale } = useLocale()

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
    // FIXME: 綺麗にする
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
            {t.WEBSITE_TITLE}
          </Link>
        </div>

        <div className="absolute right-20 bg-neutral text-white">
          <select
            className="select select-bordered select-sm bg-neutral text-white"
            defaultValue={locale}
            onChange={changeLanguage}
          >
            {listLanguages}
          </select>
        </div>
      </div>
    </>
  )
}

export default NavBar
