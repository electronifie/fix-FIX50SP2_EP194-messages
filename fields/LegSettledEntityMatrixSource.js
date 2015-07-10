var invert = require('invert-obj');

function LegSettledEntityMatrixSource (legSettledEntityMatrixSource) {
  this.message = legSettledEntityMatrixSource;
}

LegSettledEntityMatrixSource.prototype.value = function () {
  return this.message;
};

LegSettledEntityMatrixSource.Tag = '2159';

LegSettledEntityMatrixSource.Type = 'STRING';

module.exports = LegSettledEntityMatrixSource;