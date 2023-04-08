import haukka from "../assets/haukka-transparent.png";

type Props = {
  name: string;
  desc: string;
  date: string;
  image: string | null;
};

const Event = ({ name, desc, date, image }: Props) => {
  return (
    <div className="w-full h-[300px] border sm:grid grid-cols-5 rounded">
      <div className="col-span-2 h-full w-full sm:flex items-center justify-center p-6 hidden">
        <img
          className="h-[250px] w-auto rounded-sm"
          src={image ? image : haukka}
        ></img>
      </div>

      <div className="flex flex-col sm:border-x items-center p-8  ">
        <h1 className="text-5xl">{date}</h1>
      </div>

      <div className="flex flex-col col-span-2 items-center font-sans font-bold uppercase p-8 gap-5">
        <h4 className="text-4xl sm:text-5xl">{name}</h4>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Event;
