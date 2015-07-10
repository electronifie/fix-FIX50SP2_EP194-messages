var invert = require('invert-obj');

function ClearingIntention (clearingIntention) {
  this.message = clearingIntention;
}

ClearingIntention.prototype.value = function () {
  return this.message;
};


ClearingIntention.Keys = {
  DO_NOT_INTEND_TO_CLEAR: '0',
  INTEND_TO_CLEAR: '1',
};

ClearingIntention.Tag = '1924';

ClearingIntention.Type = 'INT';

ClearingIntention.Values = invert(ClearingIntention.Keys);

module.exports = ClearingIntention;