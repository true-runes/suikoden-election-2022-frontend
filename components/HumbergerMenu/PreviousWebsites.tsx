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
    <div>
      <div className="text-lg">
        <div tabIndex={0} className="collapse">
          <input type="checkbox" className="peer" style={{ minHeight: 0 }} />
          <div
            className="collapse-title"
            style={{
              padding: 0,
              minHeight: 0,
            }}
          >
            📓 過去の幻水総選挙
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'text-bottom',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>{' '}
            </span>
          </div>
          <div className="collapse-content">
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
    </div>
  )
}

export default PreviousWebsites
