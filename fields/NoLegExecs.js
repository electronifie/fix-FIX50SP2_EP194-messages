var invert = require('invert-obj');

function NoLegExecs (noLegExecs) {
  this.message = noLegExecs;
}

NoLegExecs.prototype.value = function () {
  return this.message;
};

NoLegExecs.Tag = '1892';

NoLegExecs.Type = 'NUMINGROUP';

module.exports = NoLegExecs;