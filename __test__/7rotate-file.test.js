// secara default, winston transport file hanya akan menyimpan semua log dalam satu file
// perilakku ini akan sangat berbahaya ketiak apllikasi berjalan dala jangka waktu yang  lama
// karena ukuran file akan menjadi besar
// jadi ada namanya daily rotate file
// bisa secara otomatis menghapus file lama
// harus diinstall

import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("Logging dengan daily rotate ile", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: `./hasil_log/app-%DATE%.log`,
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info("Hello World");
  }
});
