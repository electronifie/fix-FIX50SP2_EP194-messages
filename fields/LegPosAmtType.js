var invert = require('invert-obj');

function LegPosAmtType (legPosAmtType) {
  this.message = legPosAmtType;
}

LegPosAmtType.prototype.value = function () {
  return this.message;
};

LegPosAmtType.Tag = '1588';

LegPosAmtType.Type = 'STRING';

module.exports = LegPosAmtType;