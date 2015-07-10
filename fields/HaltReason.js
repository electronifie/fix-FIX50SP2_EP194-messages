var invert = require('invert-obj');

function HaltReason (haltReason) {
  this.message = haltReason;
}

HaltReason.prototype.value = function () {
  return this.message;
};


HaltReason.Keys = {
  NEWS_DISSEMINATION: '0',
  ORDER_INFLUX: '1',
  ORDER_IMBALANCE: '2',
  ADDITIONAL_INFORMATION: '3',
  NEWS_PENDING: '4',
  EQUIPMENT_CHANGEOVER: '5',
};

HaltReason.Tag = '327';

HaltReason.Type = 'INT';

HaltReason.Values = invert(HaltReason.Keys);

module.exports = HaltReason;