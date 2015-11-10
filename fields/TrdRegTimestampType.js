var invert = require('invert-obj');

function TrdRegTimestampType (trdRegTimestampType) {
  this.message = trdRegTimestampType;
}

TrdRegTimestampType.prototype.value = function () {
  return this.message;
};


TrdRegTimestampType.Keys = {
  'EXECUTION_TIME': '1',
  'TIME_IN': '2',
  'TIME_OUT': '3',
  'BROKER_RECEIPT': '4',
  'BROKER_EXECUTION': '5',
  'DESK_RECEIPT': '6',
  'SUBMISSION_TO_CLEARING': '7',
  'TIME_PRIORITY': '8',
  'ORDERBOOK_ENTRY_TIME': '9',
  'ORDER_SUBMISSION_TIME': '10',
  'PUBLICLY_REPORTED': '11',
  'PUBLIC_REPORT_UPDATED': '12',
  'NON_PUBLICLY_REPORTED': '13',
  'NON_PUBLIC_REPORT_UPDATED': '14',
  'SUBMITTED_FOR_CONFIRMATION': '15',
  'UPDATED_FOR_CONFIRMATION': '16',
  'CONFIRMED': '17',
  'UPDATED_FOR_CLEARING': '18',
  'CLEARED': '19',
  'ALLOCATIONS_SUBMITTED': '20',
  'ALLOCATIONS_UPDATED': '21',
  'APPLICATION_COMPLETED': '22',
  'SUBMITTED_TO_REPOSITORY': '23',
  'POST_TRADE_CONTINUATION_EVENT': '24',
  'POST_TRADE_VALUATION': '25',
};

TrdRegTimestampType.Tag = '770';

TrdRegTimestampType.Type = 'INT';

TrdRegTimestampType.Values = invert(TrdRegTimestampType.Keys);

module.exports = TrdRegTimestampType;