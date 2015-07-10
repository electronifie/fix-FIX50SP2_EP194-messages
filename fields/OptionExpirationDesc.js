var invert = require('invert-obj');

function OptionExpirationDesc (optionExpirationDesc) {
  this.message = optionExpirationDesc;
}

OptionExpirationDesc.prototype.value = function () {
  return this.message;
};

OptionExpirationDesc.Tag = '1581';

OptionExpirationDesc.Type = 'STRING';

module.exports = OptionExpirationDesc;