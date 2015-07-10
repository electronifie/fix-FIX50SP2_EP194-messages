var invert = require('invert-obj');

function NoSecurityClassifications (noSecurityClassifications) {
  this.message = noSecurityClassifications;
}

NoSecurityClassifications.prototype.value = function () {
  return this.message;
};

NoSecurityClassifications.Tag = '1582';

NoSecurityClassifications.Type = 'NUMINGROUP';

module.exports = NoSecurityClassifications;