var invert = require('invert-obj');

function UnderlyingStreamTerminationDateAdjusted (underlyingStreamTerminationDateAdjusted) {
  this.message = underlyingStreamTerminationDateAdjusted;
}

UnderlyingStreamTerminationDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateAdjusted.Tag = '40555';

UnderlyingStreamTerminationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamTerminationDateAdjusted;