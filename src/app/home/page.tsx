import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

import request from "@/request";

interface HomeProps {
  title: string;
  fetchURL: string;
  rowID: string;
}
const Home: React.FC<HomeProps> = ({ title, fetchURL, rowID }) => {
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-80 my-6">
        <MovieList
          rowID="1"
          title="UpComing"
          fetchURL={request.requestUpcoming}
        />
        <MovieList
          rowID="2"
          title="Popular"
          fetchURL={request.requestPopular}
        />
        <MovieList
          rowID="3"
          title="Trending"
          fetchURL={request.requestTrending}
        />
      </div>
    </>
  );
};

export default Home;
