var invert = require('invert-obj');

function LegComplexOptPayoutTime (legComplexOptPayoutTime) {
  this.message = legComplexOptPayoutTime;
}

LegComplexOptPayoutTime.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutTime.Tag = '2225';

LegComplexOptPayoutTime.Type = 'INT';

module.exports = LegComplexOptPayoutTime;