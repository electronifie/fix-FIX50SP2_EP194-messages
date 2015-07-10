var invert = require('invert-obj');

function NoRelativeValues (noRelativeValues) {
  this.message = noRelativeValues;
}

NoRelativeValues.prototype.value = function () {
  return this.message;
};

NoRelativeValues.Tag = '2529';

NoRelativeValues.Type = 'NUMINGROUP';

module.exports = NoRelativeValues;