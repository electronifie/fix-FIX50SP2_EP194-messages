var invert = require('invert-obj');

function MandatoryClearingIndicator (mandatoryClearingIndicator) {
  this.message = mandatoryClearingIndicator;
}

MandatoryClearingIndicator.prototype.value = function () {
  return this.message;
};

MandatoryClearingIndicator.Tag = '1928';

MandatoryClearingIndicator.Type = 'BOOLEAN';

module.exports = MandatoryClearingIndicator;