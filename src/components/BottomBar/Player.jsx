import { Icon } from "../../Icons";
import { useEffect, useMemo, useState } from "react";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "redux/reducers/playerSlice";

export default function Player() {
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.playerState);
  //   const [values, setValues] = useState([50]);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing))
  }, [state.playing])

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume == 0 || state.muted) {
      return "mute";
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return "mutelw";
    }
    if (state.volume >= 0.33 && state.volume < 0.66) {
      return "mutemd";
    }
    return "mutehg";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between px-4 items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                  <img src={current.image} alt="" />
                  <button 
                    onClick={()=> dispatch(setSidebar(true))}  
                    className="w-6 h-6 rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute top-1.5 right-1.5 bg-black flex items-center justify-center">
                    <Icon size={16} name="arrowup" />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>

            <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="heart" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="picturein" />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col  items-center px-4">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon name="plprev" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8  bg-white rounded-full hover:scale-[1.06] text-black flex items-center justify-center "
          >
            <Icon name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon name="plnext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2 mt-1.5">
          {audio}
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
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
          <Icon name="microphone" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size={16} />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
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
        <button className="w-8 h-8 flex items-center justify-center text-white  text-opacity-70 hover:text-opacity-100">
          <Icon name="fullscreen" size={16} />
        </button>
      </div>
    </div>
  );
}
