var invert = require('invert-obj');

function ProtectionTermNotional (protectionTermNotional) {
  this.message = protectionTermNotional;
}

ProtectionTermNotional.prototype.value = function () {
  return this.message;
};

ProtectionTermNotional.Tag = '40182';

ProtectionTermNotional.Type = 'AMT';

module.exports = ProtectionTermNotional;