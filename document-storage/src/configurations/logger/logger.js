const log4js = require("log4js");
log4js.configure({
  appenders: {
    fileAppender: { type: "file", filename: "./logs/document-storage.log" }
  },
  categories: { default: { appenders: ["fileAppender"], level: "info" } }
});

let getLogger = function() {
  let logger = log4js.getLogger();
  logger.level = "info";
  return logger;
};

module.exports = {
  getLogger: getLogger
};
