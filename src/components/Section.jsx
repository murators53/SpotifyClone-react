import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

export default function Section({ title, more = false, items }) {

  const imageStyle = item => {
    switch (item.type) {
      case 'artist':
        return 'rounded-full'
      case 'podcast':
        return 'rounded-xl'
        
      default:
        return 'rounded'
    }
  }

  return (
    <section>
      <header className="flex items-center  justify-between mb-4">
        <NavLink to={more ?? '#'}>
          <h3 className="text-2xl hover:underline font-semibold text-white tracking-tight pt-5">
          {title}
        </h3>
        </NavLink>
        {more && (
          <NavLink
            className={"text-xs hover:underline font-semibold text-link tracking-wider"}
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active group"}
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={`absolute object-cover inset-0 w-full h-full ${imageStyle(item)}`}/>
              <button className="w-10 h-10 rounded-full group-hover:flex group-focus:flex bg-spotify absolute bottom-2 right-2  items-center justify-center hidden">
                <Icon name="play" />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
