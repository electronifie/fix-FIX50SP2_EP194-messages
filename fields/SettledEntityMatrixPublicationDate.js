var invert = require('invert-obj');

function SettledEntityMatrixPublicationDate (settledEntityMatrixPublicationDate) {
  this.message = settledEntityMatrixPublicationDate;
}

SettledEntityMatrixPublicationDate.prototype.value = function () {
  return this.message;
};

SettledEntityMatrixPublicationDate.Tag = '1945';

SettledEntityMatrixPublicationDate.Type = 'LOCALMKTDATE';

module.exports = SettledEntityMatrixPublicationDate;