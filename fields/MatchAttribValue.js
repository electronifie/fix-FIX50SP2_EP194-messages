var invert = require('invert-obj');

function MatchAttribValue (matchAttribValue) {
  this.message = matchAttribValue;
}

MatchAttribValue.prototype.value = function () {
  return this.message;
};

MatchAttribValue.Tag = '1627';

MatchAttribValue.Type = 'STRING';

module.exports = MatchAttribValue;