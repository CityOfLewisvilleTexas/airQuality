import React, { useState, useEffect } from "react";
import CustomLoader from '../../ui/Loader'

const useFetch = url => { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
  
    async function fetchData() {
      const response = await fetch(url);
      const text = await response.text()
      setData(text)
      setLoading(false)
      document.getElementById('fetched-text').innerHTML = text.substring(text.indexOf('<!-- Discussion Text -->'), text.indexOf('<hr style="margin-top: 0; border-top-color: #f1f1f1; border-bottom: none;" />')) || 'N/A' 
    }
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return {loading, data};
  };

  
  const DiscussionText = props => {
    const {loading } = useFetch('https://cors-anywhere.herokuapp.com/https://www.tceq.texas.gov/airquality/monops/forecast_today.html');

    return (
        <div>
            { loading ? <CustomLoader/> : 
              <div style={{'backgroundColor':'#444'}}>
                  <p id="fetched-text"></p>
              </div>
          }
  
        </div>
    )
  };
  
  export default DiscussionText;
