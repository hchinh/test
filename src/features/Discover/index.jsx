import vehicleApi from 'api/vehicleApi';
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Discover from './components/Discover/Discover';

function DiscoverFeature() {
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    (async () => {
      const { vehicles } = await vehicleApi.getAll();
      setVehicleList(vehicles);
    })();
  }, []);

  return (
    <>
      <Banner />
      <Discover vehicleList={vehicleList} />
    </>
  );
}

export default DiscoverFeature;
