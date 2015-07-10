var invert = require('invert-obj');

function UnsolicitedIndicator (unsolicitedIndicator) {
  this.message = unsolicitedIndicator;
}

UnsolicitedIndicator.prototype.value = function () {
  return this.message;
};


UnsolicitedIndicator.Keys = {
  MESSAGE_IS_BEING_SENT_AS_A_RESULT_OF_A_PRIOR_REQUEST: 'N',
  MESSAGE_IS_BEING_SENT_UNSOLICITED: 'Y',
};

UnsolicitedIndicator.Tag = '325';

UnsolicitedIndicator.Type = 'BOOLEAN';

UnsolicitedIndicator.Values = invert(UnsolicitedIndicator.Keys);

module.exports = UnsolicitedIndicator;