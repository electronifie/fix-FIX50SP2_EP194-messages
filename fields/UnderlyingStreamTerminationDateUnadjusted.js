var invert = require('invert-obj');

function UnderlyingStreamTerminationDateUnadjusted (underlyingStreamTerminationDateUnadjusted) {
  this.message = underlyingStreamTerminationDateUnadjusted;
}

UnderlyingStreamTerminationDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateUnadjusted.Tag = '40548';

UnderlyingStreamTerminationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamTerminationDateUnadjusted;