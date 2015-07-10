var invert = require('invert-obj');

function PosMaintAction (posMaintAction) {
  this.message = posMaintAction;
}

PosMaintAction.prototype.value = function () {
  return this.message;
};


PosMaintAction.Keys = {
  NEW_USED_TO_INCREMENT_THE_OVERALL_TRANSACTION_QUANTITY: '1',
  REPLACE_USED_TO_OVERRIDE_THE_OVERALL_TRANSACTION_QUANTITY_OR_SPECIFI_ADD_MESSAGES_BASED_ON_THE_REFERENCE_ID: '2',
  CANCEL_USED_TO_REMOVE_THE_OVERALL_TRANSACTION_OR_SPECIFIC_ADD_MESSAGES_BASED_ON_REFERENCE_ID: '3',
  REVERSE_USED_TO_COMPLETELLY_BACK_OUT_THE_TRANSACTION_SUCH_THAT_THE_TRANSACTION_NEVER_EXISTED: '4',
};

PosMaintAction.Tag = '712';

PosMaintAction.Type = 'INT';

PosMaintAction.Values = invert(PosMaintAction.Keys);

module.exports = PosMaintAction;