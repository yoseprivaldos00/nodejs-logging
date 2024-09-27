// jenis jenis level (urutan dari tinggi ke paling rendah)
// error
// warn
// info
// http
// verbose
// debug
// silly -> paling tidak penting

import winston from "winston";

test("logging with level", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Error Message" });
  logger.log({ level: "warn", message: "Warn Message" });
  logger.log({ level: "info", message: "Info Message" });
  logger.log({ level: "http", message: "HTTP message" });
  logger.log({ level: "verbose", message: "Verbose Message" });
  logger.log({ level: "debug", message: "Debug Message" });
  logger.log({ level: "silly", message: "Silly Message" });
});
