var invert = require('invert-obj');

function NoUnderlyingStreams (noUnderlyingStreams) {
  this.message = noUnderlyingStreams;
}

NoUnderlyingStreams.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreams.Tag = '40540';

NoUnderlyingStreams.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreams;