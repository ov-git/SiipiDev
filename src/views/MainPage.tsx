import Slider from '../components/Slider';
import Map from '../components/Map';

const MainPage = () => {
  return (
    <>
      <div className="hidden sm:block">
        <Slider />
      </div>

      <div className="w-full h-full flex flex-col gap-4 md:grid grid-cols-2 text-white md:justify-center">
        <h1 className="mt-16 sm:mt-0 flex text-4xl sm:text-5xl md:col-span-2 p-10 justify-center font-bold sm:border-b-2">
          Baari Haukansiipi
        </h1>

        <div className="h-full w-full flex flex-col items-center text-4xl sm:text-5xl gap-4 justify-center relative">
          <h3 className="font-bold ">AUKIOLOAJAT</h3>
          <p>Su-To 9-24</p>
          <p>Pe 9-02</p>
          <p>La 9-02</p>
          {/* <img src={haukka} className="h-auto w-3/5 absolute bottom-0" />
          <div className="h-[400px]"></div> */}
        </div>

        <Map />
      </div>
    </>
  );
};

export default MainPage;
