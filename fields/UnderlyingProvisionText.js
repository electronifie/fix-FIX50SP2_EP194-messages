var invert = require('invert-obj');

function UnderlyingProvisionText (underlyingProvisionText) {
  this.message = underlyingProvisionText;
}

UnderlyingProvisionText.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionText.Tag = '42170';

UnderlyingProvisionText.Type = 'STRING';

module.exports = UnderlyingProvisionText;