var invert = require('invert-obj');

function UnderlyingOptionExpirationDesc (underlyingOptionExpirationDesc) {
  this.message = underlyingOptionExpirationDesc;
}

UnderlyingOptionExpirationDesc.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExpirationDesc.Tag = '2286';

UnderlyingOptionExpirationDesc.Type = 'STRING';

module.exports = UnderlyingOptionExpirationDesc;