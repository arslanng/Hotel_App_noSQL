import { useEffect, useState } from "react";

function App() {
  const [hotels, setHotels] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getHotels");
    const responseBody = await response.json();
    setHotels(responseBody.data.hotel_data.values);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hotels);
  return (
    <div className="App">
      <h1>My Hotels</h1>
      {hotels?.map((hotel) => (
        <div className="hotel" key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
