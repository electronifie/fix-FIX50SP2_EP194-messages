var invert = require('invert-obj');

function NoDisclosureInstructions (noDisclosureInstructions) {
  this.message = noDisclosureInstructions;
}

NoDisclosureInstructions.prototype.value = function () {
  return this.message;
};

NoDisclosureInstructions.Tag = '1812';

NoDisclosureInstructions.Type = 'NUMINGROUP';

module.exports = NoDisclosureInstructions;