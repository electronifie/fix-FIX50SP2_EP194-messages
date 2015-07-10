var invert = require('invert-obj');

function UnderlyingStreamTerminationDateOffsetUnit (underlyingStreamTerminationDateOffsetUnit) {
  this.message = underlyingStreamTerminationDateOffsetUnit;
}

UnderlyingStreamTerminationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateOffsetUnit.Tag = '40553';

UnderlyingStreamTerminationDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingStreamTerminationDateOffsetUnit;