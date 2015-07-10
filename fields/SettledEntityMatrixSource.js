var invert = require('invert-obj');

function SettledEntityMatrixSource (settledEntityMatrixSource) {
  this.message = settledEntityMatrixSource;
}

SettledEntityMatrixSource.prototype.value = function () {
  return this.message;
};

SettledEntityMatrixSource.Tag = '1944';

SettledEntityMatrixSource.Type = 'STRING';

module.exports = SettledEntityMatrixSource;