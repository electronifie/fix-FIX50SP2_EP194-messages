var invert = require('invert-obj');

function RelSymTransactTime (relSymTransactTime) {
  this.message = relSymTransactTime;
}

RelSymTransactTime.prototype.value = function () {
  return this.message;
};

RelSymTransactTime.Tag = '1504';

RelSymTransactTime.Type = 'UTCTIMESTAMP';

module.exports = RelSymTransactTime;