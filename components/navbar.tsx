import { Input } from '@/components/ui/input'
import DropDownMenu from './dropDownMenu'

export default async function Navbar() {
  return (
    <div className='flex justify-between items-center py-2'>
      <div className='hidden md:flex p-2'>
        <Input id='search' placeholder='Search...' />
      </div>
      <div className='px-2'>
        <DropDownMenu />
      </div>
    </div>
  )
}
