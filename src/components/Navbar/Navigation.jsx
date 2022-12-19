import { Icon } from '../../Icons'

function Navigation() {
  return (
    <nav className='flex items-center gap-x-2'>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-spotify bg-opacity-70'>
            <Icon size={22} name='prev'/>
        </button>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-spotify bg-opacity-70'>
            <Icon size={22} name='next'/>
        </button>
    </nav>
  )
}

export default Navigation
