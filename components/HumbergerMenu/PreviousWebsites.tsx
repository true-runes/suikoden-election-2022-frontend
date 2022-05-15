import PreviousWebsiteLink from './PreviousWebsiteLink'

const PreviousWebsites = () => {
  const previousWebsiteNamesAndUrls = [
    { siteName: '幻水総選挙2021', url: 'https://election-2021.suikoden.info' },
    { siteName: '幻水総選挙2020', url: 'https://election-2020.suikoden.info' },
    { siteName: '幻水総選挙2019', url: 'https://election-2019.suikoden.info' },
    { siteName: '幻水総選挙2018', url: 'https://election-2018.suikoden.info' },
    { siteName: '幻水総選挙2017', url: 'https://election-2017.suikoden.info' },
    { siteName: '幻水総選挙2016', url: 'https://election-2016.suikoden.info' },
  ]

  return (
    <>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title pl-0">
          <div>過去の幻水総選挙</div>
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
