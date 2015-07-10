var invert = require('invert-obj');

function ProvisionText (provisionText) {
  this.message = provisionText;
}

ProvisionText.prototype.value = function () {
  return this.message;
};

ProvisionText.Tag = '40113';

ProvisionText.Type = 'STRING';

module.exports = ProvisionText;