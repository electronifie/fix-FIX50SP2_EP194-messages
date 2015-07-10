var invert = require('invert-obj');

function StreamEffectiveDateBusinessCenter (streamEffectiveDateBusinessCenter) {
  this.message = streamEffectiveDateBusinessCenter;
}

StreamEffectiveDateBusinessCenter.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateBusinessCenter.Tag = '40909';

StreamEffectiveDateBusinessCenter.Type = 'STRING';

module.exports = StreamEffectiveDateBusinessCenter;