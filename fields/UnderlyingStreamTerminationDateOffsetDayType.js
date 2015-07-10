var invert = require('invert-obj');

function UnderlyingStreamTerminationDateOffsetDayType (underlyingStreamTerminationDateOffsetDayType) {
  this.message = underlyingStreamTerminationDateOffsetDayType;
}

UnderlyingStreamTerminationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateOffsetDayType.Tag = '40554';

UnderlyingStreamTerminationDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingStreamTerminationDateOffsetDayType;