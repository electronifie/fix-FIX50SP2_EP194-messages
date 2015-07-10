var invert = require('invert-obj');

function LegSettledEntityMatrixPublicationDate (legSettledEntityMatrixPublicationDate) {
  this.message = legSettledEntityMatrixPublicationDate;
}

LegSettledEntityMatrixPublicationDate.prototype.value = function () {
  return this.message;
};

LegSettledEntityMatrixPublicationDate.Tag = '2160';

LegSettledEntityMatrixPublicationDate.Type = 'LOCALMKTDATE';

module.exports = LegSettledEntityMatrixPublicationDate;