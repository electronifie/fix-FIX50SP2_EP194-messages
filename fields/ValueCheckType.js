var invert = require('invert-obj');

function ValueCheckType (valueCheckType) {
  this.message = valueCheckType;
}

ValueCheckType.prototype.value = function () {
  return this.message;
};


ValueCheckType.Keys = {
  'PRICE_CHECK': '1',
  'NOTIONAL_VALUE_CHECK': '2',
};

ValueCheckType.Tag = '1869';

ValueCheckType.Type = 'INT';

ValueCheckType.Values = invert(ValueCheckType.Keys);

module.exports = ValueCheckType;