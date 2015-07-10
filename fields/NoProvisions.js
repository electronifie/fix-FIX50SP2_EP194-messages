var invert = require('invert-obj');

function NoProvisions (noProvisions) {
  this.message = noProvisions;
}

NoProvisions.prototype.value = function () {
  return this.message;
};

NoProvisions.Tag = '40090';

NoProvisions.Type = 'NUMINGROUP';

module.exports = NoProvisions;