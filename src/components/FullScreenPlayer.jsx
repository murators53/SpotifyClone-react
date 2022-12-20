import { Icon } from "Icons";
import { useSelector } from "react-redux";
import { secondsToTime } from "utils";
import CustomRange from "./CustomRange";

export default function FullScreenPlayer({
  toggle,
  state,
  controls,
  volumeIcon,
}) {
  const { current } = useSelector((state) => state.playerState);

  return (
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.image})` }}
      />

    <div className="absolute top-8 left-8 gap-x-4 opacity-70 text-white flex items-center">
        <Icon size={32} name='spotify' />
        <div className="text-xs">
            <p style={{fontSize:'11px'}}>PLAYING FROM PLAYLIST</p>
            <h6 className="font-semibold mt-0.5">{current.title}</h6>
        </div>
    </div>
      <div className="absolute left-8 bottom-36 flex items-center gap-x-5">
        <img src={current.image} className="w-24 h-24 object-cover" />
        <div className="self-end">
          <h3 className="text-4xl font-bold">{current.title}</h3>
          <p className="text-sm font-medium opacity-50">
            {current.description}
          </p>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full absolute bottom-4 flex flex-col items-center px-8"
      >
        <div className="w-full flex items-center gap-x-2 mt-1.5">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon size={32} name="plprev" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-16 h-16  bg-white rounded-full hover:scale-[1.06] text-black flex items-center justify-center "
          >
            <Icon size={32} name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon size={32} name="plnext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" />
          </button>
        </div>
        <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
          <button
            onClick={controls[state?.playing ? "unmute" : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100"
          >
            <Icon name={volumeIcon} size={16} />
          </button>

          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="fullscreenexit" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
