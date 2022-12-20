import { AiOutlineHome, AiOutlineSearch, AiFillCaretDown, AiOutlineHeart } from "react-icons/ai";
import { ImBooks, ImVolumeMute2, ImVolumeLow, ImVolumeMedium, ImVolumeHigh } from "react-icons/im";
import { GiLoveSong } from "react-icons/gi";
import { HiPlusSm } from "react-icons/hi";
import { SlArrowUp } from "react-icons/sl";
import { RxExitFullScreen,RxEnterFullScreen } from "react-icons/rx";
import { TbMicrophone2 } from "react-icons/tb";
import { MdDownloading,MdOutlineQueueMusic,MdOutlinePictureInPictureAlt, MdDevices } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FiExternalLink,FiRepeat } from "react-icons/fi";
import { BsShuffle,BsSpotify } from "react-icons/bs";
import { BiPlay,BiSkipPrevious,BiSkipNext,BiPause } from "react-icons/bi";
const HomeIcon = ({ size }) => {
  return <AiOutlineHome size={size} />;
};

const SearchIcon = ({ size }) => {
  return <AiOutlineSearch size={size} />;
};

const CollectionIcon = ({ size }) => {
  return <ImBooks size={size} />;
};

const PlusIcons = ({ size }) => {
  return <HiPlusSm size={size} />;
};
const LoveIcon = ({ size }) => {
  return <GiLoveSong size={size} />;
};

const DownloadIcon = ({ size }) => {
  return <MdDownloading size={size} />
};

const PrevIcon = ({ size }) => {
  return <GrPrevious size={size} />
};

const NextIcon = ({ size }) => {
  return <GrNext size={size} />
};

const LinkIcon = ({ size }) => {
  return <FiExternalLink size={size} />
};

const DownIcon = ({ size }) => {
  return <AiFillCaretDown size={size} />
};

const PlayIcon = ({ size }) => {
  return <BiPlay size={size} />
};

const PauseIcon = ({ size }) => {
  return <BiPause size={size} />
};

const PlayerPrevIcon = ({ size }) => {
  return <BiSkipPrevious size={size} />
};

const PlayerNextIcon = ({ size }) => {
  return <BiSkipNext size={size} />
};

const FullScreenIcon = ({ size }) => {
  return <RxEnterFullScreen size={size} />
};

const FullScreenExitIcon = ({ size }) => {
  return <RxExitFullScreen size={size} />
};

const RepeatIcon = ({ size }) => {
  return <FiRepeat size={size} />
};

const ShuffleIcon = ({ size }) => {
  return <BsShuffle size={size} />
};

const QueueIcon = ({ size }) => {
  return <MdOutlineQueueMusic size={size} />
};

const PictureInIcon = ({ size }) => {
  return <MdOutlinePictureInPictureAlt size={size} />
};

const HeartIcon = ({ size }) => {
  return <AiOutlineHeart size={size} />
};

const MuteIcon = ({ size }) => {
  return <ImVolumeMute2 size={size} />
};

const MuteLowIcon = ({ size }) => {
  return <ImVolumeLow size={size} />
};

const MuteMediumIcon = ({ size }) => {
  return <ImVolumeMedium size={size} />
};

const MuteHighIcon = ({ size }) => {
  return <ImVolumeHigh size={size} />
};

const DeviceIcon = ({ size }) => {
  return <MdDevices size={size} />
};

const MicrophoneIcon = ({ size }) => {
  return <TbMicrophone2 size={size} />
};

const ArrowUpIcon = ({ size }) => {
  return <SlArrowUp size={size} />
};

const SpotifyIcon = ({ size }) => {
  return <BsSpotify size={size} />
};

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcons,
    love: LoveIcon,
    download:DownloadIcon,
    prev:PrevIcon,
    next:NextIcon,
    down:DownIcon,
    link:LinkIcon,
    play:PlayIcon,
    pause:PauseIcon,
    plprev:PlayerPrevIcon,
    plnext:PlayerNextIcon,
    fullscreen:FullScreenIcon,
    fullscreenexit:FullScreenExitIcon,
    repeat:RepeatIcon,
    shuffle:ShuffleIcon,
    queue:QueueIcon,
    picturein:PictureInIcon,
    heart:HeartIcon,
    mute:MuteIcon,
    mutelw:MuteLowIcon,
    mutemd:MuteMediumIcon,
    mutehg:MuteHighIcon,
    device:DeviceIcon,
    microphone:MicrophoneIcon,
    arrowup:ArrowUpIcon,
    spotify:SpotifyIcon,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
