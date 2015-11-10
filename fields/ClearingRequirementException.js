var invert = require('invert-obj');

function ClearingRequirementException (clearingRequirementException) {
  this.message = clearingRequirementException;
}

ClearingRequirementException.prototype.value = function () {
  return this.message;
};


ClearingRequirementException.Keys = {
  'NO_EXCEPTION': '0',
  'EXCEPTION': '1',
  'END_USER_EXCEPTION': '2',
  'INTER_AFFILIATE_EXCEPTION': '3',
  'TREASURY_AFFILIATE_EXCEPTION': '4',
  'COOPERATIVE_EXCEPTION': '5',
};

ClearingRequirementException.Tag = '1932';

ClearingRequirementException.Type = 'INT';

ClearingRequirementException.Values = invert(ClearingRequirementException.Keys);

module.exports = ClearingRequirementException;