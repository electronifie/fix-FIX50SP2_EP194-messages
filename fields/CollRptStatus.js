var invert = require('invert-obj');

function CollRptStatus (collRptStatus) {
  this.message = collRptStatus;
}

CollRptStatus.prototype.value = function () {
  return this.message;
};


CollRptStatus.Keys = {
  'ACCEPTED': '0',
  'RECEIVED': '1',
  'REJECTED': '2',
};

CollRptStatus.Tag = '2488';

CollRptStatus.Type = 'INT';

CollRptStatus.Values = invert(CollRptStatus.Keys);

module.exports = CollRptStatus;