import { scaleRotate as Menu } from 'react-burger-menu'

const MenuItems = () => {
  return (
    <div>
      {/* TODO: outer-container は再検討 */}
      {/* TODO: Element with ID 'outer-container' not found */}
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <p className="text-2xl">幻水総選挙2022</p>

        <div className="divider"></div>

        <div>
          <a className="menu-item" href="https://example.com/">
            投票方法
          </a>
        </div>

        <div>
          <a className="menu-item" href="https://example.com/">
            企画
          </a>
        </div>

        <div className="menu-item">
          <a href="https://example.com/">よくある質問</a>
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
