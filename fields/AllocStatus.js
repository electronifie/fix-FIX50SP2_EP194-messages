var invert = require('invert-obj');

function AllocStatus (allocStatus) {
  this.message = allocStatus;
}

AllocStatus.prototype.value = function () {
  return this.message;
};


AllocStatus.Keys = {
  'ACCEPTED': '0',
  'BLOCK_LEVEL_REJECT': '1',
  'ACCOUNT_LEVEL_REJECT': '2',
  'RECEIVED': '3',
  'INCOMPLETE': '4',
  'REJECTED_BY_INTERMEDIARY': '5',
  'ALLOCATION_PENDING': '6',
  'REVERSED': '7',
  'CANCELLED_BY_INTERMEDIARY': '8',
  'CLAIMED': '9',
  'REFUSED': '10',
  'PENDING_GIVE_UP_APPROVAL': '11',
  'CANCELLED': '12',
  'PENDING_TAKE_UP_APPROVAL': '13',
  'REVERSAL_PENDING': '14',
};

AllocStatus.Tag = '87';

AllocStatus.Type = 'INT';

AllocStatus.Values = invert(AllocStatus.Keys);

module.exports = AllocStatus;