import Link from 'next/link'

export const GeneralInformation = () => {
  return (
    <>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />

        <div className="collapse-title pl-0">
          <div>各種情報</div>
        </div>

        <div className="collapse-content">
          <div>
            <Link
              href="/events-in-event/result-illustration-applications"
              passHref
            >
              <span className="link link-hover">開票イラスト応募状況</span>
            </Link>
          </div>
          <div className="my-4" />
          <div>
            <Link
              href="/events-in-event/novels-on-themes-application-results"
              passHref
            >
              <span className="link link-hover">「お題」募集結果</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
