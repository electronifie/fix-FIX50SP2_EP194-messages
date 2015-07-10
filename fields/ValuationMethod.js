var invert = require('invert-obj');

function ValuationMethod (valuationMethod) {
  this.message = valuationMethod;
}

ValuationMethod.prototype.value = function () {
  return this.message;
};


ValuationMethod.Keys = {
  PREMIUM_STYLE: 'EQTY',
  FUTURES_STYLE_MARK_TO_MARKET: 'FUT',
  FUTURES_STYLE_WITH_AN_ATTACHED_CASH_ADJUSTMENT: 'FUTDA',
  CDS_STYLE_COLLATERALIZATION_OF_MARKET_TO_MARKET_AND_COUPON: 'CDS',
  CDS_IN_DELIVERY_USE_RECOVERY_RATE_TO_CALCULATE_OBLIGATION: 'CDSD',
};

ValuationMethod.Tag = '1197';

ValuationMethod.Type = 'STRING';

ValuationMethod.Values = invert(ValuationMethod.Keys);

module.exports = ValuationMethod;