var invert = require('invert-obj');

function ProtectionTermEventUnit (protectionTermEventUnit) {
  this.message = protectionTermEventUnit;
}

ProtectionTermEventUnit.prototype.value = function () {
  return this.message;
};


ProtectionTermEventUnit.Keys = {
  DAY: 'D',
  WEEK: 'Wk',
  MONTH: 'Mo',
  YEAR: 'Yr',
};

ProtectionTermEventUnit.Tag = '40196';

ProtectionTermEventUnit.Type = 'STRING';

ProtectionTermEventUnit.Values = invert(ProtectionTermEventUnit.Keys);

module.exports = ProtectionTermEventUnit;