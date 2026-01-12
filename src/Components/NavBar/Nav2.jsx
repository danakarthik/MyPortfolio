import { Link, useLocation } from 'react-router-dom'

const Nav2 = () => {
  const location = useLocation()

  return (
    <div className="flex items-center gap-6 text-lg">
      {["Home", "Professional", "Skills", "Projects", "Hire me"].map((item, i) => {

        const path =
          item === "Home"
            ? "/"
            : item === "Hire me"
            ? "/hire"
            : `/${item.toLowerCase().replace(" ", "")}`

        const isActive = location.pathname === path

        return (
          <Link
            key={i}
            to={path}
            className={`cursor-pointer transition flex items-center leading-tight whitespace-nowrap
              ${isActive ? "text-red-500" : "hover:text-red-500"}
            `}
          >
            {item}
          </Link>
        )
      })}
    </div>
  )
}

export default Nav2