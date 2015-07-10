var invert = require('invert-obj');

function ComplexOptPayoutPaySide (complexOptPayoutPaySide) {
  this.message = complexOptPayoutPaySide;
}

ComplexOptPayoutPaySide.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutPaySide.Tag = '2117';

ComplexOptPayoutPaySide.Type = 'INT';

module.exports = ComplexOptPayoutPaySide;