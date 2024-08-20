/* eslint-disable no-unused-vars */

// const menuItems = [
//   {
//     title: 'MENU',
//     items: [
//       {
//         icon: 'House',
//         label: 'Home',
//         href: '/',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'GraduationCap',
//         label: 'Teachers',
//         href: '/list/teachers',
//         visible: ['admin', 'teacher']
//       },
//       {
//         icon: 'Backpack',
//         label: 'Students',
//         href: '/list/students',
//         visible: ['admin', 'teacher']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Parents',
//         href: '/list/parents',
//         visible: ['admin', 'teacher']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Subjects',
//         href: '/list/subjects',
//         visible: ['admin']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Classes',
//         href: '/list/classes',
//         visible: ['admin', 'teacher']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Lessons',
//         href: '/list/lessons',
//         visible: ['admin', 'teacher']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Exams',
//         href: '/list/exams',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Assignments',
//         href: '/list/assignments',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Results',
//         href: '/list/results',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'AlarmClockIcon',
//         label: 'Attendance',
//         href: '/list/attendance',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'CalendarDays',
//         label: 'Events',
//         href: '/list/events',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'MessageCircleMore',
//         label: 'Messages',
//         href: '/list/messages',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'Megaphone',
//         label: 'Announcements',
//         href: '/list/announcements',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       }
//     ]
//   },
//   {
//     title: 'OTHER',
//     items: [
//       {
//         icon: 'SquareUserRound',
//         label: 'Profile',
//         href: '/profile',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'Settings',
//         label: 'Settings',
//         href: '/settings',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       },
//       {
//         icon: 'LogOut',
//         label: 'Logout',
//         href: '/logout',
//         visible: ['admin', 'teacher', 'student', 'parent']
//       }
//     ]
//   }
// ]

import {
  File,
  Trash2,
  Users2,
  House,
  GraduationCap,
  IdCard,
  NotebookPen,
  MessageCircleMore,
  Megaphone,
  Settings,
  CalendarDays,
  LogOut,
  SquareUserRound,
  Backpack,
  NotepadText,
  BookA,
  BookTextIcon,
  LucideBookOpenText,
  BookUserIcon,
  NotebookIcon
} from 'lucide-react'

import { Separator } from '../ui/separator'
import NavItems from '../navItems'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex flex-col gap-2 py-2 justify-between w-full'>
      <div className='flex flex-col gap-y-4'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2'>
          <NotebookIcon className='h-5 w-5 text-primary' />
          <span className='hidden lg:block font-bold'>App</span>
        </Link>
        <Separator />
        <NavItems
          links={[
            {
              title: 'Home',
              label: '23',
              icon: House,
              variant: 'default'
            },
            {
              title: 'Teachers',
              label: '9',
              icon: GraduationCap,
              variant: 'ghost'
            },
            {
              title: 'Students',
              label: '',
              icon: Backpack,
              variant: 'ghost'
            },
            {
              title: 'Parents',
              label: '',
              icon: Users2,
              variant: 'ghost'
            },
            {
              title: 'Classes',
              label: '',
              icon: NotepadText,
              variant: 'ghost'
            },
            {
              title: 'Exams',
              label: '',
              icon: NotebookPen,
              variant: 'ghost'
            },
            {
              title: 'Assignments',
              label: '',
              icon: BookTextIcon,
              variant: 'ghost'
            },
            {
              title: 'Attendance',
              label: '',
              icon: BookA,
              variant: 'ghost'
            },
            {
              title: 'Events',
              label: '5',
              icon: CalendarDays,
              variant: 'ghost'
            },
            {
              title: 'Messages',
              label: '',
              icon: MessageCircleMore,
              variant: 'ghost'
            },
            {
              title: 'Announcements',
              label: '',
              icon: Megaphone,
              variant: 'ghost'
            }
          ]}
        />
      </div>
      <NavItems
        links={[
          {
            title: 'Profile',
            label: '128',
            icon: SquareUserRound,
            variant: 'ghost'
          },
          {
            title: 'Settings',
            label: '',
            icon: Settings,
            variant: 'ghost'
          },
          {
            title: 'Logout',
            label: '',
            icon: LogOut,
            variant: 'ghost'
          }
        ]}
      />
    </div>
  )
}
