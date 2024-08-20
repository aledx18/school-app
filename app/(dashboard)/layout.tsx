import Menu from '@/components/menu/menu'

import { ReactNode } from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className='flex h-svh'>
      <div className='w-[14%] md:w-[8%] lg:w-[15%] lg:p-4 flex justify-between'>
        <Menu />
      </div>
      <div className='w-[86%] md:w-[92%] lg:w-[85%] bg-sky-50'>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>Content</span>
        </div>
      </div>
    </div>
  )
}
