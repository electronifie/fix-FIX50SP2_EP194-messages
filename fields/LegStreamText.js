var invert = require('invert-obj');

function LegStreamText (legStreamText) {
  this.message = legStreamText;
}

LegStreamText.prototype.value = function () {
  return this.message;
};

LegStreamText.Tag = '40248';

LegStreamText.Type = 'STRING';

module.exports = LegStreamText;