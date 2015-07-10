var invert = require('invert-obj');

function UnderlyingStreamTerminationDateOffsetPeriod (underlyingStreamTerminationDateOffsetPeriod) {
  this.message = underlyingStreamTerminationDateOffsetPeriod;
}

UnderlyingStreamTerminationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateOffsetPeriod.Tag = '40552';

UnderlyingStreamTerminationDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingStreamTerminationDateOffsetPeriod;