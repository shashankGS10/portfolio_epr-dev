import React from 'react'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar/index'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar className="top-2 " />
      </div>
    </div>
  )
}

export default Layout