var invert = require('invert-obj');

function UnderlyingNTPositionLimit (underlyingNtpositionLimit) {
  this.message = underlyingNtpositionLimit;
}

UnderlyingNTPositionLimit.prototype.value = function () {
  return this.message;
};

UnderlyingNTPositionLimit.Tag = '2038';

UnderlyingNTPositionLimit.Type = 'INT';

module.exports = UnderlyingNTPositionLimit;