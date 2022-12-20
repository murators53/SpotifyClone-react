import { Icon } from "Icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "redux/reducers/playerSlice";

export default function Songitem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.playerState);
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    if (current.id === item.id) {
        if (playing) {
            controls.pause()
        } else {
            controls.play()
        }
    }
    else{
        dispatch(setCurrent(item));
    }
  };

  return (
    <NavLink
      key={item.id}
      to="/"
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          className={`absolute object-cover inset-0 w-full h-full ${imageStyle(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full group-hover:flex group-focus:flex bg-spotify absolute bottom-2 right-2  items-center justify-center ${(current?.id == item.id && playing ) ? 'flex':'hidden'} `}
        >
          <Icon name={(current?.id === item.id && playing) ? "pause" : "play"} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}
