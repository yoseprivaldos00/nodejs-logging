import winston from "winston";

test("file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        level: "info",
        filename: "./hasil_log/application.log",
      }),
    ],
  });
  logger.info("Hello World");
  logger.info("Hello World");
});
