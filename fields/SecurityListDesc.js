var invert = require('invert-obj');

function SecurityListDesc (securityListDesc) {
  this.message = securityListDesc;
}

SecurityListDesc.prototype.value = function () {
  return this.message;
};

SecurityListDesc.Tag = '1467';

SecurityListDesc.Type = 'STRING';

module.exports = SecurityListDesc;