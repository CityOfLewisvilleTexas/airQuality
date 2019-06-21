import moment from 'moment'

export const apiURL = `https://cors-anywhere.herokuapp.com/http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=75067&date=${moment().format('YYYY-MM-DD')}&distance=25&API_KEY=7203C2E7-D768-413C-9045-55E9FFF5D334`

export const setColor = number => {
    var color
    switch (number) {
        case 1:
            color = 'green'
            break;
        case 2:
            color = 'yellow'
            break;
        case 3:
            color = 'orange'
            break;
        case 4:
            color = 'red'
            break;
        case 5:
            color = 'violet'
            break;
        default:
            color = '#ddd'
    }
    return color
}

export const corsAnywhere = () => {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
}
