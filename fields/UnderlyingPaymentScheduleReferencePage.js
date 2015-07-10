var invert = require('invert-obj');

function UnderlyingPaymentScheduleReferencePage (underlyingPaymentScheduleReferencePage) {
  this.message = underlyingPaymentScheduleReferencePage;
}

UnderlyingPaymentScheduleReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleReferencePage.Tag = '40707';

UnderlyingPaymentScheduleReferencePage.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleReferencePage;