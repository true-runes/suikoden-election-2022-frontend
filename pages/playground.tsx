import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

const Playground: NextPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://comptiq.microcms.io/api/v1/gss2022', {
        headers: {
          'X-MICROCMS-API-KEY': process.env.hoge, // Revoke済み
        },
      })
      .then((res) => {
        setData(res.data.contents)
      })
  }, [])

  return (
    <>
      <p>Hello, Playground!</p>
      <div>
        {/* {data.map((item) => {
          return (
            <div key={item?.id}>
              <p>{item?.characterName}</p>
              <p>{item?.createdAt}</p>
            </div>
          )
        })} */}
      </div>
    </>
  )
}

export default Playground
