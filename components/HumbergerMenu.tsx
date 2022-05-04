import { scaleRotate as Menu } from 'react-burger-menu'
import Link from 'next/link'

const MenuItems = () => {
  return (
    <div>
      {/* TODO: outer-container は再検討 */}
      {/* TODO: Element with ID 'outer-container' not found */}
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <p className="text-2xl">
          <Link href="/">幻水総選挙2022</Link>
        </p>

        <div className="divider"></div>

        <div>
          <Link href="/how-to-vote">投票方法</Link>
        </div>

        <div>
          <Link href="/kikaku">企画</Link>
        </div>

        <div className="menu-item">
          <Link href="/faq">よくある質問</Link>
        </div>

        <>
          <div tabIndex={0} className="collapse">
            <input type="checkbox" className="peer" style={{ minHeight: 0 }} />
            <div
              className="collapse-title"
              style={{
                padding: 0,
                minHeight: 0,
              }}
            >
              過去の幻水総選挙{' '}
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
              <p>2021</p>
              <p>2020</p>
              <p>2019</p>
              <p>2018</p>
            </div>
          </div>
        </>
      </Menu>
    </div>
  )
}

export default MenuItems
