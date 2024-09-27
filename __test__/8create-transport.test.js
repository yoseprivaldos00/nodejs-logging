import winston from "winston";
import TransportStream from "winston-transport";

test("create trasport baru", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()}: ${info.level.toUpperCase()}: ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("HTTP message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
