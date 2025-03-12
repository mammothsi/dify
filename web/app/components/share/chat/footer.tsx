import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <div className='flex justify-center py-3 text-xs text-gray-400'>
      <Link href="https://vikai.si" target="_blank" className='flex items-center'>
        <span className='mr-1'>{t('share.chat.footer')}</span>
        <span>Poganja Vika</span>
      </Link>
    </div>
  )
}
