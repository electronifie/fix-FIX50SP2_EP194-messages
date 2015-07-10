var invert = require('invert-obj');

function UnderlyingStreamDataProvider (underlyingStreamDataProvider) {
  this.message = underlyingStreamDataProvider;
}

UnderlyingStreamDataProvider.prototype.value = function () {
  return this.message;
};

UnderlyingStreamDataProvider.Tag = '41977';

UnderlyingStreamDataProvider.Type = 'STRING';

module.exports = UnderlyingStreamDataProvider;