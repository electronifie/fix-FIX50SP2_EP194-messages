var invert = require('invert-obj');

function TrdRptStatus (trdRptStatus) {
  this.message = trdRptStatus;
}

TrdRptStatus.prototype.value = function () {
  return this.message;
};


TrdRptStatus.Keys = {
  'ACCEPTED': '0',
  'REJECTED': '1',
  'CANCELLED': '2',
  'ACCEPTED_WITH_ERRORS': '3',
  'PENDING_NEW': '4',
  'PENDING_CANCEL': '5',
  'PENDING_REPLACE': '6',
  'TERMINATED': '7',
  'PENDING_VERIFICATION': '8',
  'DEEMED_VERIFIED': '9',
  'VERIFIED': '10',
  'DISPUTED': '11',
};

TrdRptStatus.Tag = '939';

TrdRptStatus.Type = 'INT';

TrdRptStatus.Values = invert(TrdRptStatus.Keys);

module.exports = TrdRptStatus;