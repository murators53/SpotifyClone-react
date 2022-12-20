import { Icon } from "Icons"
import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "redux/reducers/playerSlice"

export default function SidebarCover() {
    const dispatch=useDispatch()
    const {current} = useSelector(state=>state.playerState)

  return (
    <div className="pt-[100%] relative bg-black group">
        <img src={current.image} className='w-full h-full object-cover absolute top-0 left-0' />
        <button 
                    onClick={()=> dispatch(setSidebar(false))}  
                    className="w-6 h-6 -rotate-180 rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute top-1.5 right-1.5 bg-black flex items-center justify-center">
                    <Icon size={16} name="arrowup" />
                  </button>
    </div>
  )
}
