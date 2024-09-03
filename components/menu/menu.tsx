'use client'
/* eslint-disable no-unused-vars */

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
import Sidebar from '@/components/sidebar'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex flex-col justify-between py-4 w-full'>
      <div className='flex flex-col gap-y-4'>
        <Link
          href='/'
          className='flex items-center bg-secondary p-2 justify-center rounded-sm lg:justify-start gap-x-2'>
          <NotebookIcon className='h-5 w-5 text-primary' />
          <span className='hidden lg:block font-bold'>App</span>
        </Link>
        <Separator />
        <Sidebar
          links={[
            {
              title: 'Home',
              href: '/admin',
              label: '23',
              icon: House,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Teachers',
              href: '/list/teachers',
              label: '9',
              icon: GraduationCap,
              variant: 'ghost',
              visible: ['admin', 'teacher']
            },
            {
              title: 'Students',
              href: '/list/students',
              label: '',
              icon: Backpack,
              variant: 'ghost',
              visible: ['admin', 'teacher']
            },
            {
              title: 'Parents',
              label: '',
              href: '/parent',
              icon: Users2,
              variant: 'ghost',
              visible: ['admin', 'teacher']
            },
            {
              title: 'Classes',
              href: '/list/classes',
              label: '',
              icon: NotepadText,
              variant: 'ghost',
              visible: ['admin', 'teacher']
            },
            {
              title: 'Exams',
              href: '/list/exams',
              label: '',
              icon: NotebookPen,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Assignments',
              href: '',
              label: '',
              icon: BookTextIcon,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Attendance',
              href: '',
              label: '',
              icon: BookA,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Events',
              href: '',
              label: '5',
              icon: CalendarDays,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Messages',
              href: '',
              label: '',
              icon: MessageCircleMore,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Announcements',
              href: '',
              label: '',
              icon: Megaphone,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            }
          ]}
        />
        <Separator />
      </div>

      <div>
        <Separator />

        <Sidebar
          links={[
            {
              title: 'Profile',
              href: '/profile',
              label: '128',
              icon: SquareUserRound,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Settings',
              href: '/settings',
              label: '',
              icon: Settings,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            },
            {
              title: 'Logout',
              href: '/logout',
              label: '',
              icon: LogOut,
              variant: 'ghost',
              visible: ['admin', 'teacher', 'student', 'parent']
            }
          ]}
        />
      </div>
    </div>
  )
}
