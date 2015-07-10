var invert = require('invert-obj');

function UnderlyingSettledEntityMatrixPublicationDate (underlyingSettledEntityMatrixPublicationDate) {
  this.message = underlyingSettledEntityMatrixPublicationDate;
}

UnderlyingSettledEntityMatrixPublicationDate.prototype.value = function () {
  return this.message;
};

UnderlyingSettledEntityMatrixPublicationDate.Tag = '2020';

UnderlyingSettledEntityMatrixPublicationDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingSettledEntityMatrixPublicationDate;