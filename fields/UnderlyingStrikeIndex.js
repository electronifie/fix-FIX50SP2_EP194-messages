var invert = require('invert-obj');

function UnderlyingStrikeIndex (underlyingStrikeIndex) {
  this.message = underlyingStrikeIndex;
}

UnderlyingStrikeIndex.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeIndex.Tag = '2291';

UnderlyingStrikeIndex.Type = 'STRING';

module.exports = UnderlyingStrikeIndex;