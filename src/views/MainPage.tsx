import Slider from "../components/Slider";
import Map from "../components/Map";

const MainPage = () => {
  return (
    <>
      <Slider />

      <div className="w-full h-full grid md:grid-cols-2 text-white md:justify-center">
        <h1 className="flex text-5xl md:col-span-2 p-10 justify-center font-bold border-b-2">
          Baari Haukansiipi
        </h1>

        <div className="h-full w-full flex flex-col items-center text-5xl gap-4 p-8 relative">
          <h3 className="font-bold ">AUKIOLOAJAT</h3>
          <p>Su-To 9-24</p>
          <p>Pe 9-02</p>
          <p>La 9-02</p>
          {/* <img src={haukka} className="h-[300px] absolute bottom-0" /> */}
        </div>

        <Map />
      </div>
    </>
  );
};

export default MainPage;
