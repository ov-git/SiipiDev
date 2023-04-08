import { memo, useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid black",
  borderRadius: "20px",
};

const uluru = { lat: 60.374947151012, lng: 25.018455476398486 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_APIKEY,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="border border-black w-full py-6 md:px-8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={uluru}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={uluru} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default memo(Map);
