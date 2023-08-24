/* eslint-disable jsx-a11y/alt-text */
import Navbar from "@/components/Navbar";
import SavedShows from "@/components/SavedShows";

/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-[30.25vw]">
        <img
          className="w-full h-[30.25vw] object-cover brightness-[30%]"
          src="/images/hero.jpg"
          alt="/"
        ></img>
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <p className="text-pink-600 text-1xl md:text-5xl h-full w-[100%] lg:text-6xl font-bold drop-shadow-xl">
            My List
          </p>
          <p
            className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl overflow-hidden"
            style={{
              maxHeight: "8em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          ></p>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default page;
