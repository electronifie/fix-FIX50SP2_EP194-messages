var invert = require('invert-obj');

function NoRateSources (noRateSources) {
  this.message = noRateSources;
}

NoRateSources.prototype.value = function () {
  return this.message;
};

NoRateSources.Tag = '1445';

NoRateSources.Type = 'NUMINGROUP';

module.exports = NoRateSources;