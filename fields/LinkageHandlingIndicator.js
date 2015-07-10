var invert = require('invert-obj');

function LinkageHandlingIndicator (linkageHandlingIndicator) {
  this.message = linkageHandlingIndicator;
}

LinkageHandlingIndicator.prototype.value = function () {
  return this.message;
};

LinkageHandlingIndicator.Tag = '2448';

LinkageHandlingIndicator.Type = 'BOOLEAN';

module.exports = LinkageHandlingIndicator;