import type { NextPage } from 'next'
import HumbergerNavigation from '../components/HumbergerMenu/Navigation'

const HowToVote: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <title>投票方法 - 幻水総選挙2022</title>
      <p>Hello, how-to-vote World!</p>
    </div>
  )
}

export default HowToVote
