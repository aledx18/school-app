'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Laptop, Moon, Sun } from 'lucide-react'
import {
  DropdownMenuGroup,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'

export default function ThemeSwitcher({ iconClass }: { iconClass: string }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <DropdownMenuGroup className='flex flex-col gap-0.5'>
      <DropdownMenuItem
        onClick={() => setTheme('light')}
        className={theme === 'light' ? 'bg-muted' : ''}>
        <Sun className={iconClass} />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={() => setTheme('dark')}
        className={theme === 'dark' ? 'bg-muted' : ''}>
        <Moon className={iconClass} />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={() => setTheme('system')}
        className={theme === 'system' ? 'bg-muted' : ''}>
        <Laptop className={iconClass} />
        System
      </DropdownMenuItem>
    </DropdownMenuGroup>
  )
}
