import type { NextPage } from 'next'
import HumbergerNavigation from '../components/HumbergerMenu/Navigation'

const Faq: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <title>よくある質問 - 幻水総選挙2022</title>
      <p>Hello, FAQ World!</p>
    </div>
  )
}

export default Faq
