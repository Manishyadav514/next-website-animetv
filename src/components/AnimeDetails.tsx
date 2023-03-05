import Image from "next/image";
import { CommonButton } from "./CommonButton";

const animeData = {
  animeTitle: "Naruto",
  type: "TV Series",
  releasedDate: "2002",
  status: "Completed",
  genres: ["Action", "Comedy", "Martial Arts", "Shounen", "Super Power"],
  otherNames: "ナルト",
  synopsis:
    "In a world of mystical and powerful enemies lurk in every nation, a legendary Nine-Tailed Demon Fox attacked the ninja village Konoha, killing many innocent people. In response of a desperate measure from the people, the leader of the village – the Fourth Hokage – sacrificed his life to defeat the demon fox. By sacrificing his own life, he sealed the demon fox into a very young boy named, Naruto Uzumaki. Naruto has lost his parents during the attack. He grew up in the village and was mistreated badly by everyone in town.\n\nWith his loud mouth and careless attitude, he is determined to become the greatest ninja, hokage, in his village. Along with friends, and hope, Naruto trains to become a better ninja than expected.",
  animeImg: "https://gogocdn.net/images/anime/N/naruto.jpg",
  totalEpisodes: "220",
};

const AnimeDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-5">
      <div className="max-w-sm p-2 lg:mr-10 rounded overflow-hidden shadow-lg shadow-black bg-white dark:bg-darkTheme-700">
        <Image
          width={150}
          height={200}
          src={animeData.animeImg}
          alt={animeData.animeImg}
          className="rounded lg:w-80"
        />
      </div>
      <div className="max-w-3xl">
        {" "}
        <div className="my-3 text-2xl flex justify-center items-center md:justify-start">
          {animeData.animeTitle}
        </div>
        <div className="flex gap-1 justify-center items-center md:justify-start">
          <span className="border border-gray-800 dark:border-gray-200 rounded text-xs font-semibold px-[3px]">
            HD
          </span>
          <span className="border border-gray-800 dark:border-gray-200 rounded text-xs font-semibold px-[3px]">
            SUB
          </span>
          <span className="border border-gray-800 dark:border-gray-200 rounded text-xs font-semibold px-[3px]">
            DUB
          </span>
          <div className="flex gap-2 ml-4">
            <span className="text-xs rounded-full px-[5px] bg-gray-700 text-gray-100">
              Movie
            </span>
            <span className="text-xs rounded-full px-[5px] bg-gray-700 text-gray-100">
              Completed
            </span>
            <span className="text-xs rounded-full px-[5px] bg-gray-700 text-gray-100">
              2h 10m
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row my-4 gap-2">
            <CommonButton
              btnLabel="Watch Now"
              customClass="rounded-full shadow-black m-auto md:m-0"
              btnIcon="material-symbols:play-circle-outline"
            />
            <CommonButton
              btnLabel="Add to Watchlist"
              bgBlack
              customClass="rounded-full border-2 border-deco-red m-auto md:m-0"
              btnIcon="material-symbols:add"
              iconRight
            />
          </div>
          <div className="flex gap-4">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Aime Title
            </p>
            <p className="text-sm h-full  overflow-hidden">
              {animeData.animeTitle}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Japnese Name
            </p>
            <p className="text-sm h-full  overflow-hidden">
              {animeData.otherNames}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Type
            </p>
            <p className="text-sm">{animeData.type}</p>
          </div>
          <div className="flex gap-4">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Release Date
            </p>
            <p className="text-sm">{animeData.releasedDate}</p>
          </div>
          <div className="flex gap-4">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Status
            </p>
            <p className="text-sm">{animeData.status}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            <p className="text-base font-bold after:content-[':'] after:ml-2">
              Genre
            </p>
            {animeData.genres.length > 1 &&
              animeData.genres.map((genre, index) => (
                <span
                  key={index}
                  className="text-xs rounded-full px-[5px] py-[2px] border-2 border-darkTheme-600"
                >
                  {genre}
                </span>
              ))}
          </div>

          <div className="">
            <p className="text-sm">
              <strong className="text-base font-bold mr-1 after:content-[':'] after:ml-1">
                Overview
              </strong>
              {animeData.synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
