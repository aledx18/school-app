'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { CalendarDays } from 'lucide-react'
import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <div className='flex items-center justify-center p-4'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border border-primary'
        />
      </div>
      <div className='flex items-center justify-between px-4'>
        <h1 className='text-xl font-semibold my-2'>Events</h1>
        <CalendarDays className='text-primary' />
      </div>
      <div className='flex flex-col gap-4 p-4'>
        {events.map((event) => (
          <div
            className='p-5 rounded-md border-2 border-t-4 odd:border-t-primary even:border-t-secondary'
            key={event.id}>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-secondary-foreground'>
                {event.title}
              </h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-muted-foreground text-sm'>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
