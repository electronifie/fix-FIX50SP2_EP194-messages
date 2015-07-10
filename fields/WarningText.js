var invert = require('invert-obj');

function WarningText (warningText) {
  this.message = warningText;
}

WarningText.prototype.value = function () {
  return this.message;
};

WarningText.Tag = '2520';

WarningText.Type = 'STRING';

module.exports = WarningText;