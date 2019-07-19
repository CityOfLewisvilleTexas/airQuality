import React, { useState, useEffect } from "react";
import { setColor, serviceURL } from "../../utils";
import CustomLoader from '../../ui/Loader'

const useServiceFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json[0])
    console.log(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [url]);

  return {loading, data}
}

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
  const {loading, data} = useServiceFetch(serviceURL)
  console.log(data)

  return (
      <div>
          { loading ? <CustomLoader/> : 
            <div style={{'backgroundColor': setColor(data[0]["CategoryNumber"]), 'color': data[0]["CategoryNumber"] === 2 ? '#000' : 'inherit'}}>
                <p>{data[0]["DateForecast"]}</p>
                <p>{data[0]["CategoryNumber"]}</p>
                <p>{data[0]["CategoryName"]}</p>
                <p>{data[0]["Discussion"]}</p>
            </div>
        }

      </div>
  )
};

export default AirQuality;
