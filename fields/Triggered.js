var invert = require('invert-obj');

function Triggered (triggered) {
  this.message = triggered;
}

Triggered.prototype.value = function () {
  return this.message;
};


Triggered.Keys = {
  'NOT_TRIGGERED': '0',
  'TRIGGERED': '1',
  'STOP_ORDER_TRIGGERED': '2',
  'ONE_CANCELS_THE_OTHER_ORDER_TRIGGERED': '3',
  'ONE_TRIGGERS_THE_OTHER_ORDER_TRIGGERED': '4',
  'ONE_UPDATES_THE_OTHER_ORDER_TRIGGERED': '5',
};

Triggered.Tag = '1823';

Triggered.Type = 'INT';

Triggered.Values = invert(Triggered.Keys);

module.exports = Triggered;