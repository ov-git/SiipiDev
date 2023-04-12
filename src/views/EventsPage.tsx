import events from '../lib/events';

import Event from '../components/Event';

const EventsPage = () => {
  return (
    <div className="h-full w-full flex justify-center">
      {/* container */}
      <div className="mt-24 flex flex-col h-full w-full text-white max-w-[1200px]">
        {/* event */}
        <h1 className="w-full h-full bg-white text-black rounded-t sm:px-6 p-1 text-xl">
          TULEVAT TAPAHTUMAT
        </h1>
        {events.map((el) => (
          <Event
            key={el.name}
            name={el.name}
            desc={el.desc}
            date={el.date}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
