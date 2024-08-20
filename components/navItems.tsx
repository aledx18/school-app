import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

interface NavProps {
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: 'default' | 'ghost'
  }[]
}

export default function NavItems({ links }: NavProps) {
  return (
    <div className='group flex flex-col gap-4 py-2'>
      <nav className='grid gap-2 items-center justify-center lg:justify-normal lg:px-2 px-1'>
        {links.map((link, index) => (
          <div key={index}>
            <div className='lg:hidden block'>
              <Link
                href='#'
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'icon' }),
                  'h-9 w-9'
                )}>
                <link.icon className='h-4 w-4' />
                <span className='sr-only'>{link.title}</span>
              </Link>
            </div>

            <div className='lg:block hidden'>
              <Link
                key={index}
                href='#'
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  link.variant === 'default' &&
                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start w-full'
                )}>
                <link.icon className='mr-2 h-5 w-5' />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' &&
                        'text-background dark:text-white'
                    )}>
                    {link.label}
                  </span>
                )}
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}
