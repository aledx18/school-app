'use client'

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { usePathname } from 'next/navigation'

interface NavProps {
  links: {
    title: string
    label?: string
    href: string
    visible?: string[]
    icon: LucideIcon
    variant: 'default' | 'ghost'
  }[]
}

export default function Sidebar({ links }: NavProps) {
  const pathname = usePathname()
  return (
    <div className='group flex flex-col gap-4 py-2'>
      <nav className='grid gap-1.5 items-center justify-center lg:justify-normal lg:px-2 px-1'>
        {links.map((link, index) => (
          <div key={index}>
            <div className='lg:hidden block'>
              <Link
                href={link.href}
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'icon' }),
                  'h-9 w-9 text-muted-foreground',
                  pathname === link.href &&
                    'text-secondary-foreground bg-secondary'
                )}>
                <link.icon className='h-4 w-4' />
                <span className='sr-only'>{link.title}</span>
              </Link>
            </div>
            <div className='lg:block hidden'>
              <Link
                key={index}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  {
                    'text-muted-foreground justify-start w-full': true,
                    'text-secondary-foreground': link.variant === 'default',
                    'bg-secondary text-primary hover:text-primary rounded-sm':
                      pathname === link.href
                  }
                )}>
                <link.icon className='mr-2 h-5 w-5' />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' && 'text-secondary-foreground'
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
