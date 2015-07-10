var invert = require('invert-obj');

function LegOptPayoutType (legOptPayoutType) {
  this.message = legOptPayoutType;
}

LegOptPayoutType.prototype.value = function () {
  return this.message;
};

LegOptPayoutType.Tag = '2193';

LegOptPayoutType.Type = 'INT';

module.exports = LegOptPayoutType;