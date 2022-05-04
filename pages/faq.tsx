import type { NextPage } from 'next'
import HumbergerMenu from '../components/HumbergerMenu'

const Faq: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerMenu />
      </div>

      <title>よくある質問 - 幻水総選挙2022</title>
      <p>Hello, FAQ World!</p>
    </div>
  )
}

export default Faq
