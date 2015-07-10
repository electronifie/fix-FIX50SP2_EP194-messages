var invert = require('invert-obj');

function LegStreamEffectiveDateRelativeTo (legStreamEffectiveDateRelativeTo) {
  this.message = legStreamEffectiveDateRelativeTo;
}

LegStreamEffectiveDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateRelativeTo.Tag = '40252';

LegStreamEffectiveDateRelativeTo.Type = 'INT';

module.exports = LegStreamEffectiveDateRelativeTo;