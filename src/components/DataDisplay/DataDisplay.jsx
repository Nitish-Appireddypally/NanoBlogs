// import React, { useState, useEffect } from "react";

// function DataDisplay() {
//   // State to store fetched data
//   const [Data, setData] = useState(null);
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=b9a575c6ba917e90d58da5b6947beab1"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Handle the data
//       //   console.log(data);
//       setData(data);
//       //   console.log(Data);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });

//   return (
//     <div>
//       <h2>Data from API:</h2>
//       <p></p>
//       {/* Render fetched data
//       {data ? (
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>{item.name}</li> // Example: Displaying names from fetched data
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )} */}
//     </div>
//   );
// }

// export default DataDisplay;
