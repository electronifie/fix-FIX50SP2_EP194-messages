var invert = require('invert-obj');

function ComplexEventDateRelativeTo (complexEventDateRelativeTo) {
  this.message = complexEventDateRelativeTo;
}

ComplexEventDateRelativeTo.prototype.value = function () {
  return this.message;
};


ComplexEventDateRelativeTo.Keys = {
  'TRADE_DATE': '0',
  'SETTLEMENT_DATE': '1',
  'EFFECTIVE_DATE': '2',
  'CALCULATION_PERIOD_START_DATE': '3',
  'CALCULATION_PERIOD_END_DATE': '4',
  'RESET_DATE': '5',
  'LAST_PRICING_DATE': '6',
  'VALUATION_DATE': '7',
  'CASH_SETTLEMENT_VAULATION_DATE': '8',
  'OPTION_EXERCISE_START_DATE': '9',
};

ComplexEventDateRelativeTo.Tag = '41021';

ComplexEventDateRelativeTo.Type = 'INT';

ComplexEventDateRelativeTo.Values = invert(ComplexEventDateRelativeTo.Keys);

module.exports = ComplexEventDateRelativeTo;