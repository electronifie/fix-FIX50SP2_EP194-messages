var invert = require('invert-obj');

function EffectiveBusinessDate (effectiveBusinessDate) {
  this.message = effectiveBusinessDate;
}

EffectiveBusinessDate.prototype.value = function () {
  return this.message;
};

EffectiveBusinessDate.Tag = '2400';

EffectiveBusinessDate.Type = 'LOCALMKTDATE';

module.exports = EffectiveBusinessDate;