var invert = require('invert-obj');

function TriggerScope (triggerScope) {
  this.message = triggerScope;
}

TriggerScope.prototype.value = function () {
  return this.message;
};


TriggerScope.Keys = {
  THIS_ORDER: '0',
  OTHER_ORDER: '1',
  ALL_OTHER_ORDERS_FOR_THE_GIVEN_SECURITY: '2',
  ALL_OTHER_ORDERS_FOR_THE_GIVEN_SECURITY_AND_PRICE: '3',
  ALL_OTHER_ORDERS_FOR_THE_GIVEN_SECURITY_AND_SIDE: '4',
  ALL_OTHER_ORDERS_FOR_THE_GIVEN_SECURITY_PRICE_AND_SIDE: '5',
};

TriggerScope.Tag = '1628';

TriggerScope.Type = 'INT';

TriggerScope.Values = invert(TriggerScope.Keys);

module.exports = TriggerScope;