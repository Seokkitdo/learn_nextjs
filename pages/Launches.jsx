import React, { useState, useEffect } from 'react';

const Launches = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const res = await fetch('https://api/spacexdata.com/v3/launches');
        const data = await res.json();

        setData(data);
      } catch (error) {}
    };

    fetchLaunches();
  }, []);

  if (data === null) {
    return null;
  }

  return <div>launches</div>;
};

export default Launches;
