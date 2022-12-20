import { NavLink } from "react-router-dom";

export default function Title({more=false , title}) {
  return (
    <div>
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
    </div>
  )
}
