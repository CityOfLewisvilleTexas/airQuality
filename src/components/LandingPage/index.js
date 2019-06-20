import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const LandingPage = (props) => {
    //@TODO: create temp vars for getting date to be used in airNowAPI URL, create process.env vars for API KEY, set distance to 25m radius
    let airNowAPI = `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=75067&date=2019-06-20&distance=25&API_KEY=7203C2E7-D768-413C-9045-55E9FFF5D334`

    const useFetchAirQuality = airNowAPI => {

        const [data, setData] = useState({
            DateIssue: () => new Date().getDate().toLocaleString(),
            DateForecast: this.DateIssue || 'none',
            ReportingArea: "Dallas-Fort Worth",
            StateCode: "TX",
            Latitude: 32.767,
            Longitude: -96.783,
            ParameterName: null,
            AQI: null,
            Category: { Number: null, Name: null },
            ActionDay: false,
            Discussion: "https://www.tceq.texas.gov/airquality/monops/forecast_today.html"
        })
    }
}