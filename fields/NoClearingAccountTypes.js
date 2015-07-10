var invert = require('invert-obj');

function NoClearingAccountTypes (noClearingAccountTypes) {
  this.message = noClearingAccountTypes;
}

NoClearingAccountTypes.prototype.value = function () {
  return this.message;
};

NoClearingAccountTypes.Tag = '1918';

NoClearingAccountTypes.Type = 'NUMINGROUP';

module.exports = NoClearingAccountTypes;