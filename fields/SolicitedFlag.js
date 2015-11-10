var invert = require('invert-obj');

function SolicitedFlag (solicitedFlag) {
  this.message = solicitedFlag;
}

SolicitedFlag.prototype.value = function () {
  return this.message;
};


SolicitedFlag.Keys = {
  'WAS_NOT_SOLICITED': 'N',
  'WAS_SOLICITED': 'Y',
};

SolicitedFlag.Tag = '377';

SolicitedFlag.Type = 'BOOLEAN';

SolicitedFlag.Values = invert(SolicitedFlag.Keys);

module.exports = SolicitedFlag;