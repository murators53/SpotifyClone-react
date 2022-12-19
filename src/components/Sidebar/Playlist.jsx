export default function Playlist() {
  return (
    <nav className="mx-6 mt-4 py-2 flex-auto border-t border-opacity-20 border-white overflow-auto ">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              22.Çalma Listesi
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
