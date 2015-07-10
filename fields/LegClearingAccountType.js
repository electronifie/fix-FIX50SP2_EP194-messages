var invert = require('invert-obj');

function LegClearingAccountType (legClearingAccountType) {
  this.message = legClearingAccountType;
}

LegClearingAccountType.prototype.value = function () {
  return this.message;
};

LegClearingAccountType.Tag = '1817';

LegClearingAccountType.Type = 'INT';

module.exports = LegClearingAccountType;