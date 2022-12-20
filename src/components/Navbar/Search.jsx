import { Icon } from "Icons";

export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" className="w-12 h-10 flex items-center text-black justify-center absolute top-0 left-0">
            <Icon  name='search' />
        </label>
        <input autoFocus={true} type="text" id="search-input" className="h-10 pl-12 outline-none text-black max-w-full w-[22.75rem] bg-white font-medium rounded-3xl text-sm placeholder-black/50 " placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
    </div>
  )
}
