import React, { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
  
    async function fetchData() {
      const response = await fetch(url);
      const text = await response.text()
      setData(text)
      setLoading(false)
      document.getElementById('fetched-text').innerHTML = text.substring(text.indexOf('<!-- Discussion Text -->'), text.indexOf('<p><a href="http://service.govdelivery.com/service/multi_subscribe.html?code=TXTCEQ&amp;origin=http://www.tceq.state.tx.us/e-services/success.html"> Sign up for e-mail updates</a></p>')) || 'N/A' 
    }
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return {loading, data};
  };
  
  const DiscussionText = props => {
    const {loading, data} = useFetch('https://cors-anywhere.herokuapp.com/https://www.tceq.texas.gov/airquality/monops/forecast_today.html');
  
    return (
        <div>
            { loading ? <div>Loading...</div> : 
              <div style={{'backgroundColor':'#444'}}>
                  <p id="fetched-text"></p>
              </div>
          }
  
        </div>
    )
  };
  
  export default DiscussionText;
