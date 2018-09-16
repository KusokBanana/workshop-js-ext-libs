import express from "express";
import makeRoutes from "./routes";
import bottle from "./bottle";
import IpService from './IpService';

const app = express();
const ipService = new IpService();

bottle.factory("getCityByIp", ipService.getCityByIp);
bottle.factory("getWeather", ipService.getWeather);

makeRoutes(app);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
