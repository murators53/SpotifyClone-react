import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import { useLocation, useParams } from "react-router-dom"

export default function Navbar() {

    const {pathname} =useLocation()

  return (
    <nav className='h-[3.75rem] px-8 flex items-center justify-between'>
        <Navigation />

        <div className="px-8 pt-2">
        {
            pathname == '/search' && (
                <div>
                    Search kismindasin
                </div>
            )
        }
        </div>

        <Auth />
    </nav>
  )
}
