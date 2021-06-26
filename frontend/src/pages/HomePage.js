import React, { useState, useEffect } from "react";

export const HomePage = () => {
  const [serviceData, setServiceData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchServiceData = async () => {
      const resp = await fetch("http://localhost:8080/hello");
      const data = await resp.text();

      setServiceData(data);
      setIsLoaded(true);
    };
    fetchServiceData();
  }, []);

  return (
    <div>
      <h1>{isLoaded ? serviceData : <h3>fetching data .....</h3>}</h1>
    </div>
  );
};
