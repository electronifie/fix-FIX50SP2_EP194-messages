var invert = require('invert-obj');

function NoLegProvisions (noLegProvisions) {
  this.message = noLegProvisions;
}

NoLegProvisions.prototype.value = function () {
  return this.message;
};

NoLegProvisions.Tag = '40448';

NoLegProvisions.Type = 'NUMINGROUP';

module.exports = NoLegProvisions;