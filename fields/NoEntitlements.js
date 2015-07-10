var invert = require('invert-obj');

function NoEntitlements (noEntitlements) {
  this.message = noEntitlements;
}

NoEntitlements.prototype.value = function () {
  return this.message;
};

NoEntitlements.Tag = '1773';

NoEntitlements.Type = 'NUMINGROUP';

module.exports = NoEntitlements;