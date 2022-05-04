import type { NextPage } from 'next'

const SiteFooter: NextPage = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p className="text-xl">
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
    </div>
  )
}

export default SiteFooter
