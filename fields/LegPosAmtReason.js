var invert = require('invert-obj');

function LegPosAmtReason (legPosAmtReason) {
  this.message = legPosAmtReason;
}

LegPosAmtReason.prototype.value = function () {
  return this.message;
};

LegPosAmtReason.Tag = '1590';

LegPosAmtReason.Type = 'INT';

module.exports = LegPosAmtReason;