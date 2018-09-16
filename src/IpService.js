import weather from "yahoo-weather";
import fetch from "node-fetch";

export default class IpService {
  getCityByIp(container) {
    return fetch(
      "http://api.db-ip.com/addrinfo?api_key=bc2ab711d740d7cfa6fcb0ca8822cb327e38844f&addr=" +
        container.ip
    ).then(response => {
      return response.json().then(json => {
        return json.city || false;
      });
    });
  }

  getWeather(container) {
    return weather(container.city).then(info => {
      if (!info) return false;
      return {
        temp: info.item.condition.temp,
        wind: info.wind,
        atmosphere: info.atmosphere,
        city: info.location.city
      };
    });
  }
}
