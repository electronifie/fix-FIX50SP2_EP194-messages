var invert = require('invert-obj');

function UnderlyingStreamDesc (underlyingStreamDesc) {
  this.message = underlyingStreamDesc;
}

UnderlyingStreamDesc.prototype.value = function () {
  return this.message;
};

UnderlyingStreamDesc.Tag = '40542';

UnderlyingStreamDesc.Type = 'STRING';

module.exports = UnderlyingStreamDesc;