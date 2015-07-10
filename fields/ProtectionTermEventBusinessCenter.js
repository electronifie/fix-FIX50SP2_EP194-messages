var invert = require('invert-obj');

function ProtectionTermEventBusinessCenter (protectionTermEventBusinessCenter) {
  this.message = protectionTermEventBusinessCenter;
}

ProtectionTermEventBusinessCenter.prototype.value = function () {
  return this.message;
};

ProtectionTermEventBusinessCenter.Tag = '40186';

ProtectionTermEventBusinessCenter.Type = 'STRING';

module.exports = ProtectionTermEventBusinessCenter;