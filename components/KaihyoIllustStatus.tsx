const KaihyoIllustStatus = () => {
  return (
    <div>
      <p className={'text-2xl'}>開票イラスト応募状況</p>

      <div
        tabIndex={0}
        className="max-w-sm border collapse collapse-arrow border-base-300 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="bg-black collapse-title text-primary-content">
          Click me to show/hide content
        </div>
        <div className="bg-black collapse-content text-primary-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  )
}

export default KaihyoIllustStatus
