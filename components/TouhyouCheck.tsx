import type { NextPage } from 'next'

const TouhyouCheck: NextPage = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">投票チェック</h1>
            <p className="py-6 text-2xl">いつもの</p>
            <input
              type="text"
              placeholder="@gensosenkyo"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {/* TODO: スタイルを用いて空白を調整する */}
            <br />
            <br />
            {/* TODO: 押されたら API の戻り値が来るまでぐるぐるしてボタンを disable にする */}
            <button className="btn btn-info">チェックする</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TouhyouCheck
