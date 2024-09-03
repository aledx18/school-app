import Announcements from '@/components/announcements'
import UserCard from '@/components/userCard'
import { BarCharts } from '@/components/barCharts'
import { CalendarDemo } from '@/components/calendar'
import CircleChart from '@/components/circleChart'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className='flex gap-4 flex-col md:flex-row h-screen'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-4'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <UserCard props={{ title: 'Total Revenue', icon: DollarSign }} />
          <UserCard props={{ title: 'Subscriptions', icon: Users }} />
          <UserCard props={{ title: 'Sales', icon: CreditCard }} />
          <UserCard props={{ title: 'Active Now', icon: Activity }} />
        </div>
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='w-full lg:w-2/3 lg:h-[425px]'>
            <BarCharts />
          </div>
          <div className='w-full lg:w-2/3 lg:h-[425px]'>
            <CircleChart />
          </div>
        </div>
        <div className='lg:h-[400px] w-full flex'>
          <Announcements />
        </div>
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col'>
        <CalendarDemo />
      </div>
    </div>
  )
}
