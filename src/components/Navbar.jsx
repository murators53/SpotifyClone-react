import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import { useLocation, useParams } from "react-router-dom"
import Search from "./Navbar/Search"

export default function Navbar() {

    const {pathname} =useLocation()

  return (
    <nav className='h-[3.75rem] px-8 flex items-center justify-between'>
        <Navigation />

        {pathname  && <Search />}

        <Auth />
    </nav>
  )
}
