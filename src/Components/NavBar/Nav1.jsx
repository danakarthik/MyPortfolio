import React from 'react'
import Nav2 from './Nav2'
import ProfileDropdown from '../../Pages/ProfileDropdown'

const Nav1 = () => {
  return (
    <div className="w-full grid grid-cols-3 items-center py-4 px-6">

      {/* LEFT — Name */}
      <div className="flex justify-start items-center">
        <p className="text-[#e50914] font-extrabold text-3xl tracking-tight whitespace-nowrap">
          KARTHIK BHARATAPU
        </p>
      </div>

      {/* CENTER — Nav2 */}
      <div className="flex justify-center ml-6">
        <Nav2 />
      </div>

      {/* RIGHT — Profile Dropdown */}
      <div className="flex justify-end items-center">
        <ProfileDropdown />
      </div>

    </div>
  )
}

export default Nav1