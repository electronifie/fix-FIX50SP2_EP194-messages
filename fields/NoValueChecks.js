var invert = require('invert-obj');

function NoValueChecks (noValueChecks) {
  this.message = noValueChecks;
}

NoValueChecks.prototype.value = function () {
  return this.message;
};

NoValueChecks.Tag = '1868';

NoValueChecks.Type = 'NUMINGROUP';

module.exports = NoValueChecks;