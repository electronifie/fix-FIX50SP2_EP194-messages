var invert = require('invert-obj');

function TickRuleType (tickRuleType) {
  this.message = tickRuleType;
}

TickRuleType.prototype.value = function () {
  return this.message;
};


TickRuleType.Keys = {
  'REGULAR_TRADING': '0',
  'VARIABLE_CABINET': '1',
  'FIXED_CABINET': '2',
  'TRADED_AS_A_SPREAD_LEG': '3',
  'SETTLED_AS_A_SPREAD_LEG': '4',
  'TRADED_AS_SPREAD': '5',
};

TickRuleType.Tag = '1209';

TickRuleType.Type = 'INT';

TickRuleType.Values = invert(TickRuleType.Keys);

module.exports = TickRuleType;