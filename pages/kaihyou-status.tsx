import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import HumbergerNavigation from '../components/HumbergerMenu/Navigation'
import { Grid } from 'gridjs'

const KaihyoStatus: NextPage = () => {
  const wrapperRef: any = React.useRef(null)

  const grid = new Grid({
    columns: ['キャラ名', '応募数'],
    search: {
      enabled: true,
    },
    sort: true,
    data: [
      ['ルック', 543],
      ['テッド', 466],
      ['フリック', 466],
    ],
    className: {
      th: 'text-xl',
      td: 'bg-primary bg-base-200 text-2xl',
      table: 'bg-base-200 bg-neutral',
    },
    style: {},
  })

  useEffect(() => {
    grid.render(wrapperRef.current)
  })

  return (
    <div>
      <title>開票イラスト応募状況 - 幻水総選挙2022</title>

      <div className={'right'}>
        <HumbergerNavigation />
      </div>

      <main id="page-wrap">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="normal-case text-xl" style={{ paddingLeft: '1em' }}>
            <Link href="/">開票イラスト応募状況</Link>
          </div>
        </div>

        <div className="flex justify-center text-2xl px-2 py-2">
          2022/05/06 12:00 現在
        </div>

        <div className="overflow-x-auto">
          <div ref={wrapperRef} className="px-2" />
        </div>
      </main>
    </div>
  )
}

export default KaihyoStatus
