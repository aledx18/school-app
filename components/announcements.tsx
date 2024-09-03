import { Card } from './ui/card'

export default function Announcements() {
  return (
    <Card className='w-full p-2'>
      <div className='flex items-center justify-between px-2'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-xs'>View All</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='text-xs  rounded-md px-1 py-1'>2025-01-01</span>
          </div>
          <p className='text-sm mt-1 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className='bg-lamaPurpleLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='text-xs rounded-md px-1 py-1'>2025-01-01</span>
          </div>
          <p className='text-sm mt-1 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className='bg-lamaYellowLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='text-xs  rounded-md px-1 py-1'>2025-01-01</span>
          </div>
          <p className='text-sm mt-1 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </Card>
  )
}
