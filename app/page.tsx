import { Button } from '@/components/ui/button'
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const { isAuthenticated } = getKindeServerSession()

export default async function Home() {
  const isUserAuthenticated = await isAuthenticated()

  console.log(isUserAuthenticated)
  return (
    <div className='flex flex-col items-center p-2 h-screen'>
      {isUserAuthenticated ? (
        <LogoutLink>
          <Button variant='outline'>Logout</Button>
        </LogoutLink>
      ) : (
        <div className='flex items-center justify-center gap-x-2'>
          <LoginLink>
            <Button>Sign in</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant='secondary'>Sign up</Button>
          </RegisterLink>
        </div>
      )}
    </div>
  )
}
