var invert = require('invert-obj');

function LegSettlMethod (legSettlMethod) {
  this.message = legSettlMethod;
}

LegSettlMethod.prototype.value = function () {
  return this.message;
};

LegSettlMethod.Tag = '2192';

LegSettlMethod.Type = 'CHAR';

module.exports = LegSettlMethod;