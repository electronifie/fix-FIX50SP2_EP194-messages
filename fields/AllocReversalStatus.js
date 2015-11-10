var invert = require('invert-obj');

function AllocReversalStatus (allocReversalStatus) {
  this.message = allocReversalStatus;
}

AllocReversalStatus.prototype.value = function () {
  return this.message;
};


AllocReversalStatus.Keys = {
  'COMPLETED': '0',
  'REFUSED': '1',
  'CANCELLED': '2',
};

AllocReversalStatus.Tag = '1738';

AllocReversalStatus.Type = 'INT';

AllocReversalStatus.Values = invert(AllocReversalStatus.Keys);

module.exports = AllocReversalStatus;