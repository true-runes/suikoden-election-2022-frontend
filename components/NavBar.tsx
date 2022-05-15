import type { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <>
      <div className="navbar bg-neutral text-white">
        <div className="text-xl pl-4 font-zen-old-mincho">
          <Link href="/">幻水総選挙2022</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
