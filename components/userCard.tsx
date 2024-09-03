import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

type UserCardProps = {
  props: {
    title: string
    icon: LucideIcon
  }
}

export default function UserCard({ props }: UserCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{props.title}</CardTitle>
        <props.icon className='h-4 w-4 text-primary' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>$45,231.89</div>
        <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
      </CardContent>
    </Card>
  )
}
