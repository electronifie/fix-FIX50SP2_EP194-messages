var invert = require('invert-obj');

function NoStreams (noStreams) {
  this.message = noStreams;
}

NoStreams.prototype.value = function () {
  return this.message;
};

NoStreams.Tag = '40049';

NoStreams.Type = 'NUMINGROUP';

module.exports = NoStreams;