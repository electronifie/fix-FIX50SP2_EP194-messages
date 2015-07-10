var invert = require('invert-obj');

function NoCashSettlDealers (noCashSettlDealers) {
  this.message = noCashSettlDealers;
}

NoCashSettlDealers.prototype.value = function () {
  return this.message;
};

NoCashSettlDealers.Tag = '40277';

NoCashSettlDealers.Type = 'NUMINGROUP';

module.exports = NoCashSettlDealers;