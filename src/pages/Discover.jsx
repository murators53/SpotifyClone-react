import { Loader, SongCard, Error } from "../components";
import { genres } from "../assets/constants";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";
  
    console.log(data);
  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center sm:flex-row
            flex-col mt-4 mb-10"
      >
        <h2 className="font-bold text-3xl text-left text-white ">
          Discove clas {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none
                 sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-8 sm:justify-start justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
