import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Pic() {
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    fetchPic();

    async function fetchPic() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=XhL4505XnNTUmnu2LlYNSSXZspWbbceuan2QMiew`
      );
      const data = await res.json();
      setPicData(data);
      console.log(data);
    }
  }