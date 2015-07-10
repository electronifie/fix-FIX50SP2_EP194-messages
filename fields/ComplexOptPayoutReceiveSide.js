var invert = require('invert-obj');

function ComplexOptPayoutReceiveSide (complexOptPayoutReceiveSide) {
  this.message = complexOptPayoutReceiveSide;
}

ComplexOptPayoutReceiveSide.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutReceiveSide.Tag = '2118';

ComplexOptPayoutReceiveSide.Type = 'INT';

module.exports = ComplexOptPayoutReceiveSide;