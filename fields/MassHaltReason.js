var invert = require('invert-obj');

function MassHaltReason (massHaltReason) {
  this.message = massHaltReason;
}

MassHaltReason.prototype.value = function () {
  return this.message;
};

MassHaltReason.Tag = '1681';

MassHaltReason.Type = 'INT';

module.exports = MassHaltReason;