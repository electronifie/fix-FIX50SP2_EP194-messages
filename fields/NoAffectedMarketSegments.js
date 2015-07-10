var invert = require('invert-obj');

function NoAffectedMarketSegments (noAffectedMarketSegments) {
  this.message = noAffectedMarketSegments;
}

NoAffectedMarketSegments.prototype.value = function () {
  return this.message;
};

NoAffectedMarketSegments.Tag = '1791';

NoAffectedMarketSegments.Type = 'NUMINGROUP';

module.exports = NoAffectedMarketSegments;