import moment from 'moment'

export const apiURL = `https://cors-anywhere.herokuapp.com/http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=75067&date=${moment().format('YYYY-MM-DD')}&distance=25&API_KEY=7203C2E7-D768-413C-9045-55E9FFF5D334`
export const serviceURL = 'https://query.cityoflewisville.com/v2/?webservice=MiscPrograms/GET Air Quality Index'

export const setColor = number => {
    var color
    switch (number) {
        case "1":
            color = 'green'
            break;
        case "2":
            color = 'yellow'
            break;
        case "3":
            color = 'orange'
            break;
        case "4":
            color = 'red'
            break;
        case "5":
            color = 'violet'
            break;
        default:
            color = '#ddd'
    }
    return color
}
