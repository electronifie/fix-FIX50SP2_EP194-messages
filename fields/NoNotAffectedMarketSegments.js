var invert = require('invert-obj');

function NoNotAffectedMarketSegments (noNotAffectedMarketSegments) {
  this.message = noNotAffectedMarketSegments;
}

NoNotAffectedMarketSegments.prototype.value = function () {
  return this.message;
};

NoNotAffectedMarketSegments.Tag = '1793';

NoNotAffectedMarketSegments.Type = 'NUMINGROUP';

module.exports = NoNotAffectedMarketSegments;