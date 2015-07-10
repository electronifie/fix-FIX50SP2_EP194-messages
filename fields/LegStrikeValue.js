var invert = require('invert-obj');

function LegStrikeValue (legStrikeValue) {
  this.message = legStrikeValue;
}

LegStrikeValue.prototype.value = function () {
  return this.message;
};

LegStrikeValue.Tag = '2182';

LegStrikeValue.Type = 'FLOAT';

module.exports = LegStrikeValue;