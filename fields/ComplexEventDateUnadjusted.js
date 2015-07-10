var invert = require('invert-obj');

function ComplexEventDateUnadjusted (complexEventDateUnadjusted) {
  this.message = complexEventDateUnadjusted;
}

ComplexEventDateUnadjusted.prototype.value = function () {
  return this.message;
};

ComplexEventDateUnadjusted.Tag = '41020';

ComplexEventDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ComplexEventDateUnadjusted;