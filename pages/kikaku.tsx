import type { NextPage } from 'next'
import HumbergerNavigation from '../components/HumbergerMenu/Navigation'

const Kikaku: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <title>企画内容 - 幻水総選挙2022</title>
      <div>Hello, kikaku World!</div>
    </div>
  )
}

export default Kikaku
