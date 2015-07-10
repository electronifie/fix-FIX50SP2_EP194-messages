var invert = require('invert-obj');

function NoPaymentStreamPaymentDates (noPaymentStreamPaymentDates) {
  this.message = noPaymentStreamPaymentDates;
}

NoPaymentStreamPaymentDates.prototype.value = function () {
  return this.message;
};

NoPaymentStreamPaymentDates.Tag = '41220';

NoPaymentStreamPaymentDates.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamPaymentDates;