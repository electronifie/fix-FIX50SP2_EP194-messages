var invert = require('invert-obj');

function OrderEntryAction (orderEntryAction) {
  this.message = orderEntryAction;
}

OrderEntryAction.prototype.value = function () {
  return this.message;
};


OrderEntryAction.Keys = {
  ADD: '1',
  MODIFY: '2',
  DELETE_CANCEL: '3',
  SUSPEND: '4',
  RELEASE: '5',
};

OrderEntryAction.Tag = '2429';

OrderEntryAction.Type = 'CHAR';

OrderEntryAction.Values = invert(OrderEntryAction.Keys);

module.exports = OrderEntryAction;