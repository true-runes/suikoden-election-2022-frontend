import PreviousWebsiteLink from '@/components/humberger-menu/PreviousWebsiteLink'
import { useLocale } from '@/hooks/useLocale'

const PreviousWebsites = () => {
  const { t, locale } = useLocale()

  const previousWebsiteNamesAndUrls = [
    {
      siteName: t.WEBSITE_2021_TITLE,
      url: 'https://election-2021.suikoden.info',
    },
    {
      siteName: t.WEBSITE_2020_TITLE,
      url: 'https://election-2020.suikoden.info',
    },
    {
      siteName: t.WEBSITE_2019_TITLE,
      url: 'https://election-2019.suikoden.info',
    },
    {
      siteName: t.WEBSITE_2018_TITLE,
      url: 'https://election-2018.suikoden.info',
    },
    {
      siteName: t.WEBSITE_2017_TITLE,
      url: 'https://election-2017.suikoden.info',
    },
    {
      siteName: t.WEBSITE_2016_TITLE,
      url: 'https://election-2016.suikoden.info',
    },
  ]

  return (
    <>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title pl-0">
          <div>
            {locale === 'ja' ? '過去の幻水総選挙' : 'Previous Gensosenkyo'}
          </div>
        </div>
        <div className="collapse-content">
          <div>
            {previousWebsiteNamesAndUrls.map((siteNameAndUrl, index) => (
              <div key={index}>
                <PreviousWebsiteLink
                  siteName={siteNameAndUrl.siteName}
                  href={siteNameAndUrl.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviousWebsites
