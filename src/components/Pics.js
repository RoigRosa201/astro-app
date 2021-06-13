import { useState, useEffect } from 'react';
import NavBar from "./NavBar";

export default function Pic() {
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    fetchPic();
    async function fetchPic() {
      const res = await fetch(
        `https://images-api.nasa.gov/asset/KSC-20210114-PH-KLS01_0008?api_key=XhL4505XnNTUmnu2LlYNSSXZspWbbceuan2QMiew`
      );
       const data = await res.json();
       setPicData(data);
       console.log(data);
    }
  }, []);


  if (!picData) return <h1>no response</h1>;

  return (
      <div>

        <img src={picData.collection.items[2].href} alt={picData.title} />
      
      </div>
  )

}

  