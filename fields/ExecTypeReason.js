var invert = require('invert-obj');

function ExecTypeReason (execTypeReason) {
  this.message = execTypeReason;
}

ExecTypeReason.prototype.value = function () {
  return this.message;
};


ExecTypeReason.Keys = {
  'ORDER_ADDED_UPON_REQUEST': '1',
  'ORDER_REPLACED_UPON_REQUEST': '2',
  'ORDER_CANCELLED_UPON_REQUEST': '3',
  'UNSOLICITED_ORDER_CANCELLATION': '4',
  'NON_RESTING_ORDER_ADDED_UPON_REQUEST': '5',
  'ORDER_REPLACED_WITH_NON_RESTING_ORDER_UPON_REQUEST': '6',
  'TRIGGER_ORDER_REPLACED_UPON_REQUEST': '7',
  'SUSPENDED_ORDER_REPLACED_UPON_REQUEST': '8',
  'SUSPENDED_ORDER_CANCELED_UPON_REQUEST': '9',
  'ORDER_CANCELLATION_PENDING': '10',
  'PENDING_CANCELLATION_EXECUTED': '11',
  'RESTING_ORDER_TRIGGERED': '12',
  'SUSPENDED_ORDER_ACTIVATED': '13',
  'ACTIVE_ORDER_SUSPENDED': '14',
  'ORDER_EXPIRED': '15',
};

ExecTypeReason.Tag = '2431';

ExecTypeReason.Type = 'INT';

ExecTypeReason.Values = invert(ExecTypeReason.Keys);

module.exports = ExecTypeReason;