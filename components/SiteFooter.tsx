import type { NextPage } from 'next'

const SiteFooter: NextPage = () => {
  return (
    <>
      <footer className="footer footer-center bg-white text-black pb-6">
        <div>
          <p className="text-lg">
            幻水総選挙2022 (
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
            >
              <span className="underline">@gensosenkyo</span>
            </a>
            )
          </p>
        </div>
      </footer>{' '}
    </>
  )
}

export default SiteFooter
