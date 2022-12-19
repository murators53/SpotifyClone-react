import { AiOutlineHome, AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { GiLoveSong } from "react-icons/gi";
import { HiPlusSm } from "react-icons/hi";
import { MdDownloading } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { BiPlay } from "react-icons/bi";
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
    play:PlayIcon
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
