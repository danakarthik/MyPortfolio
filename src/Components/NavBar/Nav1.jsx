import React from 'react'
import Nav2 from './Nav2'

const Nav1 = () => {
  return (
    <div className="w-full py-4 px-6">

      {/* DESKTOP (3‑column layout) */}
      <div className="hidden md:grid grid-cols-3 items-center">
        
        {/* LEFT — Name */}
        <div className="flex justify-start items-center">
          <p className="text-[#e50914] font-extrabold text-3xl tracking-tight whitespace-nowrap">
            KARTHIK BHARATAPU
          </p>
        </div>

        {/* CENTER — Nav2 */}
        <div className="flex justify-center ml-30">
          <Nav2 />
        </div>

        {/* RIGHT — Profile (optional) */}
        {/* <div className="flex justify-end items-center">
          <ProfileDropdown />
        </div> */}
      </div>

      {/* MOBILE (stacked layout) */}
      <div className="md:hidden flex flex-col gap-3 items-end">

  {/* Name */}
  <p className="text-[#e50914] font-extrabold text-3xl tracking-tight whitespace-nowrap self-start">
    KARTHIK BHARATAPU
  </p>

  {/* Nav2 BELOW the name, aligned right */}
  <Nav2 />
</div>


    </div>
  )
}

export default Nav1