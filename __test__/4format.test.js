// terdapat beberapa format yang bisa ditampilkan pada transport
// secara default format yang ditampilkan adalah json

import winston from "winston";

// format JSON
test("format json", () => {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(), // deffault format winston adalah json, tanpa ditulis pun bisa
    transports: [new winston.transports.Console({})],
  });

  logger.info("Ini format json");
});

// format simple
test("format simple", () => {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.simple(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Ini format simple");
});

// format printf -> membuat format sendiri
test("buat format sendiri", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((info) => {
      return `${new Date()}: ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transport: [new winston.transports.Console({})],
  });

  logger.log("info", "Hello Dunia");
});
