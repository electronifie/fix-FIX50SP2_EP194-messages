var invert = require('invert-obj');

function LegStrikeIndex (legStrikeIndex) {
  this.message = legStrikeIndex;
}

LegStrikeIndex.prototype.value = function () {
  return this.message;
};

LegStrikeIndex.Tag = '2184';

LegStrikeIndex.Type = 'STRING';

module.exports = LegStrikeIndex;