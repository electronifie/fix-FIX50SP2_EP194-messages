var invert = require('invert-obj');

function StreamTerminationDateOffsetDayType (streamTerminationDateOffsetDayType) {
  this.message = streamTerminationDateOffsetDayType;
}

StreamTerminationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

StreamTerminationDateOffsetDayType.Tag = '40071';

StreamTerminationDateOffsetDayType.Type = 'INT';

module.exports = StreamTerminationDateOffsetDayType;