var invert = require('invert-obj');

function UnderlyingSettledEntityMatrixSource (underlyingSettledEntityMatrixSource) {
  this.message = underlyingSettledEntityMatrixSource;
}

UnderlyingSettledEntityMatrixSource.prototype.value = function () {
  return this.message;
};

UnderlyingSettledEntityMatrixSource.Tag = '2019';

UnderlyingSettledEntityMatrixSource.Type = 'STRING';

module.exports = UnderlyingSettledEntityMatrixSource;