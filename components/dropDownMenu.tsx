import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import ThemeSwitcher from './theme/theme-switcher'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function DropDownMenu() {
  const ICON_CLASS = 'text-muted-foreground mr-2 h-4 w-4'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='w-10 h-10 rounded-full'>
          <Avatar className='w-10 h-10'>
            <AvatarImage
              src='https://www.github.com/aledx18.png'
              alt='@aledx18'
            />
            <AvatarFallback>'Jhon Doe'</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='center' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>`Hello Jhon Doe`</p>
            <p className='text-xs leading-none text-muted-foreground'>
              'jhondoe@gmail.com'
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/auth/login'>
              <LogIn className={ICON_CLASS} />
              <span>Log in</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <LogoutLink>
              <LogOut className={ICON_CLASS} />
              Logout
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <ThemeSwitcher iconClass={ICON_CLASS} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
