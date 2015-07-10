var invert = require('invert-obj');

function ExposureDuration (exposureDuration) {
  this.message = exposureDuration;
}

ExposureDuration.prototype.value = function () {
  return this.message;
};

ExposureDuration.Tag = '1629';

ExposureDuration.Type = 'INT';

module.exports = ExposureDuration;