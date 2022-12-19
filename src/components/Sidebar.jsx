import { Icon } from "Icons";
import logo from "../img/logo.svg";
import DownloadApp from "./Sidebar/DownloadApp";
import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";

export default function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center text-sm group font-semibold hover:text-white text-link"
            >
              <span className="w-6 h-6 flex items-center group-hover:bg-opacity-100 justify-center bg-opacity-60  rounded-sm text-black bg-white mr-4">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center text-sm group font-semibold hover:text-white text-link"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-400 opacity-70 group-hover:opacity-100">
                <Icon name="love" size={18} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlist />  

      <DownloadApp/>

    </aside>
  );
}
