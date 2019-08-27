import React, { useState, useEffect } from "react";
import { setColor, serviceURL } from "../../utils";
import CustomLoader from '../../ui/Loader'
import moment from 'moment'
import Header from '../Header'

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
  const {loading, data} = useServiceFetch(`${serviceURL}MiscPrograms/GET Air Quality Index`)
  
  let status, bgColor, txtColor, index, date

        if(data !== null) {
          status = data[0]["CategoryName"].toLowerCase()
          bgColor = setColor(data[0]["CategoryNumber"])
          txtColor = data[0]["CategoryNumber"] === "2" ? '#000' : "#FFF"
          index = data[0]["CategoryNumber"]
          date = moment().format('MMMM DD, YYYY', data[0]["DateForecast"])
      }

  return (
    <div>
      <Header status={status} bgColor={bgColor} txtColor={txtColor} index={index} date={date} />
      <div>
          { loading ? <CustomLoader/> : 
            <div style={{'padding': '30px', 'backgroundColor': setColor(data[0]["CategoryNumber"]), 'color': data[0]["CategoryNumber"] === "2" ? '#000' : 'inherit'}}>
                <h2>{date}</h2>
                <h3><b>AQI Index:</b> {index}</h3>
                <h3>Currently, the air quality is {status}</h3>
                <h4>For further information, see <a style={{'color': data[0]["CategoryNumber"] === "2" ? '#000' : "#FFF"}} href={data[0]["Discussion"]}>{data[0]["Discussion"]}</a></h4>
            </div>
        }

      </div>
      </div>
  )
};

export default AirQuality;
