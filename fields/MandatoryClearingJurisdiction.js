var invert = require('invert-obj');

function MandatoryClearingJurisdiction (mandatoryClearingJurisdiction) {
  this.message = mandatoryClearingJurisdiction;
}

MandatoryClearingJurisdiction.prototype.value = function () {
  return this.message;
};

MandatoryClearingJurisdiction.Tag = '41313';

MandatoryClearingJurisdiction.Type = 'STRING';

module.exports = MandatoryClearingJurisdiction;