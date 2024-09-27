// selain kasus exception yang tidak terhandle, sering ada kasus node js kita lupa
// menghandle promise rejection

import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  // handleExcetions: true,
  // handleRejection: true
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "./hasil_log/rejection.json",
    }),
  ],
});

async function callAsync() {
  return Promise.reject("Ups");
}

callAsync();
