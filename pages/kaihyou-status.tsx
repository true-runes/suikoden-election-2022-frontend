import type { NextPage } from 'next'
import Link from 'next/link'
import HumbergerMenu from '../components/HumbergerMenu'

const KaihyoStatus: NextPage = () => {
  return (
    <div>
      <title>開票イラスト応募状況 - 幻水総選挙2022</title>

      <div className={'right'}>
        <HumbergerMenu />
      </div>

      <main id="page-wrap">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="normal-case text-xl" style={{ paddingLeft: '1em' }}>
            <Link href="/">幻水総選挙2022</Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>キャラ名</th>
                <th>応募数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ルック</td>
                <td>543</td>
              </tr>
              <tr>
                <td>テッド</td>
                <td>466</td>
              </tr>
              <tr>
                <td>フリック</td>
                <td>466</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default KaihyoStatus
