let getLoggerConfiguration = function() {
  return {
    appenders: {
      fileAppender: { type: "file", filename: "./logs/document-storage.log" }
    },
    categories: { default: { appenders: ["fileAppender"], level: "info" } }
  };
};

module.exports = {
  getLoggerConfiguration: getLoggerConfiguration
};
