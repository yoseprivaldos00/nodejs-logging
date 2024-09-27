import winston from "winston";
const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "./hasil_log/exception.json",
    }),
  ],
});

console.log(Bogor);
