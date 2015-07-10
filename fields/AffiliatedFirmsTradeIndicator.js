var invert = require('invert-obj');

function AffiliatedFirmsTradeIndicator (affiliatedFirmsTradeIndicator) {
  this.message = affiliatedFirmsTradeIndicator;
}

AffiliatedFirmsTradeIndicator.prototype.value = function () {
  return this.message;
};

AffiliatedFirmsTradeIndicator.Tag = '2525';

AffiliatedFirmsTradeIndicator.Type = 'BOOLEAN';

module.exports = AffiliatedFirmsTradeIndicator;