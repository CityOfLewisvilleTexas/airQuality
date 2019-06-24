import React, { useState, useEffect } from "react";
import { apiURL, setColor } from "../../utils";
import CustomLoader from '../../ui/Loader'

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json()
    setData(json[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {loading, data};
};

const AirQuality = props => {
  const {loading, data} = useFetch(apiURL);

  return (
      <div>
          { loading ? <CustomLoader/> : 
            <div style={{'backgroundColor': setColor(data.Category.Number)}}>
                <p>{data.DateForecast}</p>
                <p>{data.Category.Number}</p>
                <p>{data.Category.Name}</p>
                <p>{data.Discussion}</p>
            </div>
        }

      </div>
  )
};

export default AirQuality;
