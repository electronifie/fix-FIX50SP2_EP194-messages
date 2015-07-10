var invert = require('invert-obj');

function NoLegStreams (noLegStreams) {
  this.message = noLegStreams;
}

NoLegStreams.prototype.value = function () {
  return this.message;
};

NoLegStreams.Tag = '40241';

NoLegStreams.Type = 'NUMINGROUP';

module.exports = NoLegStreams;