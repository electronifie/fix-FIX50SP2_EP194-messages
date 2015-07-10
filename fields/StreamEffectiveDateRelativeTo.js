var invert = require('invert-obj');

function StreamEffectiveDateRelativeTo (streamEffectiveDateRelativeTo) {
  this.message = streamEffectiveDateRelativeTo;
}

StreamEffectiveDateRelativeTo.prototype.value = function () {
  return this.message;
};


StreamEffectiveDateRelativeTo.Keys = {
  TRADE_DATE: '0',
  SETTLEMENT_DATE: '1',
  EFFECTIVE_DATE: '2',
  CALCULATION_PERIOD_START_DATE: '3',
  CALCULATION_PERIOD_END_DATE: '4',
  RESET_DATE: '5',
  LAST_PRICING_DATE: '6',
  VALUATION_DATE: '7',
  CASH_SETTLEMENT_DATE: '8',
  OPTION_EXERCISE_START_DATE: '9',
};

StreamEffectiveDateRelativeTo.Tag = '40910';

StreamEffectiveDateRelativeTo.Type = 'INT';

StreamEffectiveDateRelativeTo.Values = invert(StreamEffectiveDateRelativeTo.Keys);

module.exports = StreamEffectiveDateRelativeTo;