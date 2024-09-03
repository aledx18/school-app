import Menu from '@/components/menu/menu'
import Navbar from '@/components/navbar'

import { ReactNode } from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className='flex h-svh'>
      <div className='w-[14%] md:w-[8%] lg:w-[15%] lg:px-4 flex justify-between bg-popover'>
        <Menu />
      </div>
      <div className='w-[86%] md:w-[92%] lg:w-[85%] xl:w-[86%] overflow-y-scroll flex flex-col '>
        <Navbar />
        <div className='p-4 md:p-6 2xl:p-6'>{children}</div>
      </div>
    </div>
  )
}
