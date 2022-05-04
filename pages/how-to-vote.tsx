import type { NextPage } from 'next'
import HumbergerMenu from '../components/HumbergerMenu'

const HowToVote: NextPage = () => {
  return (
    <div>
      <div className={'right'}>
        <HumbergerMenu />
      </div>

      <title>投票方法 - 幻水総選挙2022</title>
      <p>Hello, how-to-vote World!</p>
    </div>
  )
}

export default HowToVote
