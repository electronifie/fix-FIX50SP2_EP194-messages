var invert = require('invert-obj');

function ComplexEventCreditEventNotifyingParty (complexEventCreditEventNotifyingParty) {
  this.message = complexEventCreditEventNotifyingParty;
}

ComplexEventCreditEventNotifyingParty.prototype.value = function () {
  return this.message;
};


ComplexEventCreditEventNotifyingParty.Keys = {
  'SELLER_NOTIFIES': '0',
  'BUYER_NOTIFIES': '1',
  'SELLER_OR_BUYER_NOTIFIES': '2',
};

ComplexEventCreditEventNotifyingParty.Tag = '2134';

ComplexEventCreditEventNotifyingParty.Type = 'INT';

ComplexEventCreditEventNotifyingParty.Values = invert(ComplexEventCreditEventNotifyingParty.Keys);

module.exports = ComplexEventCreditEventNotifyingParty;