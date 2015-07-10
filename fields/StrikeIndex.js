var invert = require('invert-obj');

function StrikeIndex (strikeIndex) {
  this.message = strikeIndex;
}

StrikeIndex.prototype.value = function () {
  return this.message;
};

StrikeIndex.Tag = '1866';

StrikeIndex.Type = 'STRING';

module.exports = StrikeIndex;