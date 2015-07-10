var invert = require('invert-obj');

function NoCrossLegs (noCrossLegs) {
  this.message = noCrossLegs;
}

NoCrossLegs.prototype.value = function () {
  return this.message;
};

NoCrossLegs.Tag = '1829';

NoCrossLegs.Type = 'NUMINGROUP';

module.exports = NoCrossLegs;