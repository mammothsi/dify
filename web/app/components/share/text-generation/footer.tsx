import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <div className='px-3 py-4 bg-gray-50 rounded-b-xl'>
      <div className='flex justify-center text-xs text-gray-400'>
        <Link href="https://vikai.si" target="_blank" className='flex items-center'>
          <span className='mr-1'>{t('share.generation.footer')}</span>
          <span>Poganja Vika</span>
        </Link>
      </div>
    </div>
  )
}
