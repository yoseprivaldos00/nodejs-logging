// saat membuat logger, secara default logger tidak akan menggunakan transport
// tranport? -> Destinasi yang digunakan untuk mengirim log
//  salah satu jenis transport adalah console
// console -> tranport yang digunakan untuk mengirim data lok ke console/stdout

import winston from "winston";

test("transport console", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logging",
  });
});
