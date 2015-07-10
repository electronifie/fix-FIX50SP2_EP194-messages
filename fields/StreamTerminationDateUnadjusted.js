var invert = require('invert-obj');

function StreamTerminationDateUnadjusted (streamTerminationDateUnadjusted) {
  this.message = streamTerminationDateUnadjusted;
}

StreamTerminationDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamTerminationDateUnadjusted.Tag = '40065';

StreamTerminationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamTerminationDateUnadjusted;