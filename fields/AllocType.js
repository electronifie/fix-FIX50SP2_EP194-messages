var invert = require('invert-obj');

function AllocType (allocType) {
  this.message = allocType;
}

AllocType.prototype.value = function () {
  return this.message;
};


AllocType.Keys = {
  CALCULATED: '1',
  PRELIMINARY: '2',
  SELLSIDE_CALCULATED_USING_PRELIMINARY: '3',
  SELLSIDE_CALCULATEDD_WITHOUT_PRELIMINARY: '4',
  READY_TO_BOOK_SINGLE_ORDER: '5',
  BUYSIDE_READY_TO_BOOK_COMBINED_SET_OF_ORDERS: '6',
  WAREHOUSE_INSTRUCTION: '7',
  REQUEST_TO_INTERMEDIARY: '8',
  ACCEPT: '9',
  REJECT: '10',
  ACCEPT_PENDING: '11',
  INCOMPLETE_GROUP: '12',
  COMPLETE_GROUP: '13',
  REVERSAL_PENDING: '14',
  REOPEN_GROUP: '15',
  CANCEL_GROUP: '16',
  GIVE_UP: '17',
  TAKE_UP: '18',
  REFUSE_TAKE_UP: '19',
  INITIATE_REVERSAL: '20',
  REVERSE: '21',
  REFUSE_REVERSAL: '22',
  SUB_ALLOCATION_GIVE_UP: '23',
  APPROVE_GIVE_UP: '24',
  APPROVE_TAKE_UP: '25',
};

AllocType.Tag = '626';

AllocType.Type = 'INT';

AllocType.Values = invert(AllocType.Keys);

module.exports = AllocType;