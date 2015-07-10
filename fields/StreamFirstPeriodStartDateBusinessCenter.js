var invert = require('invert-obj');

function StreamFirstPeriodStartDateBusinessCenter (streamFirstPeriodStartDateBusinessCenter) {
  this.message = streamFirstPeriodStartDateBusinessCenter;
}

StreamFirstPeriodStartDateBusinessCenter.prototype.value = function () {
  return this.message;
};

StreamFirstPeriodStartDateBusinessCenter.Tag = '40077';

StreamFirstPeriodStartDateBusinessCenter.Type = 'STRING';

module.exports = StreamFirstPeriodStartDateBusinessCenter;