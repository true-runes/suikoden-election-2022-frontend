import type { NextPage } from 'next'
import TwitterIcon from './Svg/TwitterIcon'
import ExternalLink from './Svg/ExternalLink'
import { useLocale } from '../hooks/useLocale'

const Otoiawase: NextPage = () => {
  const { locale } = useLocale()

  return (
    <div className="bg-white text-black px-4 pb-2">
      <h1 className="text-xl font-bold pb-4 underline font-zen-old-mincho">
        {locale === 'ja' ? 'お問い合わせ' : 'Inquiry'}
      </h1>
      <div className="text-left">
        質問やご相談がありましたら、主催Twitter宛のリプライ・DMでお気軽にご連絡ください。
      </div>
    </div>
  )
}

export default Otoiawase
