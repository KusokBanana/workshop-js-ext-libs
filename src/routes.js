import bottle from "./bottle";

export default app => {
  app.get("/api/:ip", function(req, res, next) {
    bottle.value("ip", req.params.ip);
    bottle.container.getCityByIp.then(city => {
      if (!city) return next(new Error("Incorrect ip"));
      bottle.value("city", city);

      bottle.container.getWeather.then(weather => {
          if (!weather) return next(new Error("Incorrect ip"));
        res.send(JSON.stringify(weather));
      });
    });
  });
};
