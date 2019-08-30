import moment from 'moment'
import { useState, useEffect } from "react";

export const apiURL = `https://cors-anywhere.herokuapp.com/http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=75067&date=${moment().format('YYYY-MM-DD')}&distance=25&API_KEY=7203C2E7-D768-413C-9045-55E9FFF5D334`
export const serviceURL = 'https://query.cityoflewisville.com/v2/?webservice='

export const useServiceFetch = url => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [emails, setEmails] = useState(null)
    
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
      setEmails(() => {
          return json[0].reduce((acc, current) => {
              const x = acc.find(item => item.EmailAddress === current.EmailAddress)
              if(!x) return acc.concat([current])
              else return acc
            }, [])
          })
      setData(json[0])
      setLoading(false)
    }
    useEffect(() => {
      fetchData()
    }, [url]);
  
    return {loading, data, emails}
  }

export const setColor = number => {
    var color
    switch (number) {
        case "1":
            color = 'rgba(22, 182, 16, 0.86)'
            break;
        case "2":
            color = 'rgb(246, 240, 65)'
            break;
        case "3":
            color = 'rgba(242, 154, 22, 0.88)'
            break;
        case "4":
            color = 'rgba(242, 48, 22, 0.88)'
            break;
        case "5":
            color = 'rgba(176, 22, 242, 0.76)'
            break;
        default:
            color = '#ddd'
    }
    return color
}
