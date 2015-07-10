var invert = require('invert-obj');

function ExposureDurationUnit (exposureDurationUnit) {
  this.message = exposureDurationUnit;
}

ExposureDurationUnit.prototype.value = function () {
  return this.message;
};

ExposureDurationUnit.Tag = '1916';

ExposureDurationUnit.Type = 'INT';

module.exports = ExposureDurationUnit;