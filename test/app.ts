import { createLogger, transports } from "winston";
import LokiTransport from "winston-loki";

const options = {
  transports: [
    new LokiTransport({
        host: "http://localhost:3100",
        onConnectionError: (err) => console.error(err)
    })
  ]
};

const logger = createLogger(options);
logger.info("Hello world");