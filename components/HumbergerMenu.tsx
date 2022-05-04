import { scaleRotate as Menu } from 'react-burger-menu'

const MenuItems = () => {
  return (
    <div>
      {/* TODO: outer-container は再検討 */}
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <p className={'text-2xl'}>幻水総選挙2022</p>

        <a className="bm-item menu-item" href="https://example.com/">
          投票方法
        </a>
        <a className="bm-item menu-item" href="https://example.com/">
          企画
        </a>
        <a className="bm-item menu-item" href="https://example.com/">
          よくある質問
        </a>
        <a className="bm-item menu-item" href="https://example.com/">
          過去の幻水総選挙
        </a>
      </Menu>
    </div>
  )
}

export default MenuItems
