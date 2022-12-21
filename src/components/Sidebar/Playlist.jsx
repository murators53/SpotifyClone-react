export default function Playlist() {
  return (
    <nav className="mx-6 mt-4 py-2 flex-auto border-t border-opacity-20  border-white overflow-auto
    scrollbar-thin scrollbar-thumb-green-700 overflow-y-scroll scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-slate-700 h-[400vh] ">
      <ul >
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s  text-link hover:text-white flex h-8 items-center"
            >
              22.Çalma Listesi
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
