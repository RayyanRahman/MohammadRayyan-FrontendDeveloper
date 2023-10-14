import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SearchFilter from "./components/SearchFilter";
import ContentDisplay from "./components/ContentDisplay";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setFilteredData(data);
      });
  }, []);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    const filtered = data.filter((item) => {
      const original_launch = new Date(item.original_launch).toDateString();
      return (
        original_launch.includes(newFilters.original_launch.toLowerCase()) &&
        item.status.toLowerCase().includes(newFilters.status.toLowerCase()) &&
        item.type.toLowerCase().includes(newFilters.type.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <NavBar />
      <Banner />
      <SearchFilter onSearch={handleFilterChange} />
      <ContentDisplay data={filteredData} />
    </div>
  );
}

export default App;
