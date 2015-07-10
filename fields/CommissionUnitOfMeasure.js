var invert = require('invert-obj');

function CommissionUnitOfMeasure (commissionUnitOfMeasure) {
  this.message = commissionUnitOfMeasure;
}

CommissionUnitOfMeasure.prototype.value = function () {
  return this.message;
};

CommissionUnitOfMeasure.Tag = '1238';

CommissionUnitOfMeasure.Type = 'STRING';

module.exports = CommissionUnitOfMeasure;