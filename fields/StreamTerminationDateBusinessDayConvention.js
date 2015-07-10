var invert = require('invert-obj');

function StreamTerminationDateBusinessDayConvention (streamTerminationDateBusinessDayConvention) {
  this.message = streamTerminationDateBusinessDayConvention;
}

StreamTerminationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

StreamTerminationDateBusinessDayConvention.Tag = '40066';

StreamTerminationDateBusinessDayConvention.Type = 'INT';

module.exports = StreamTerminationDateBusinessDayConvention;