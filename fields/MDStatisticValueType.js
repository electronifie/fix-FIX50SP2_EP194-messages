var invert = require('invert-obj');

function MDStatisticValueType (mdstatisticValueType) {
  this.message = mdstatisticValueType;
}

MDStatisticValueType.prototype.value = function () {
  return this.message;
};


MDStatisticValueType.Keys = {
  'ABSOLUTE': '1',
  'PERCENTAGE': '2',
};

MDStatisticValueType.Tag = '2479';

MDStatisticValueType.Type = 'INT';

MDStatisticValueType.Values = invert(MDStatisticValueType.Keys);

module.exports = MDStatisticValueType;