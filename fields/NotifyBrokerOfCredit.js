var invert = require('invert-obj');

function NotifyBrokerOfCredit (notifyBrokerOfCredit) {
  this.message = notifyBrokerOfCredit;
}

NotifyBrokerOfCredit.prototype.value = function () {
  return this.message;
};


NotifyBrokerOfCredit.Keys = {
  DETAILS_SHOULD_NOT_BE_COMMUNICATED: 'N',
  DETAILS_SHOULD_BE_COMMUNICATED: 'Y',
};

NotifyBrokerOfCredit.Tag = '208';

NotifyBrokerOfCredit.Type = 'BOOLEAN';

NotifyBrokerOfCredit.Values = invert(NotifyBrokerOfCredit.Keys);

module.exports = NotifyBrokerOfCredit;