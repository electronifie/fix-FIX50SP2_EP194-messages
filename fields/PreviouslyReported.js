var invert = require('invert-obj');

function PreviouslyReported (previouslyReported) {
  this.message = previouslyReported;
}

PreviouslyReported.prototype.value = function () {
  return this.message;
};


PreviouslyReported.Keys = {
  NOT_REPORTED_TO_COUNTERPARTY: 'N',
  PERVIOUSLY_REPORTED_TO_COUNTERPARTY: 'Y',
};

PreviouslyReported.Tag = '570';

PreviouslyReported.Type = 'BOOLEAN';

PreviouslyReported.Values = invert(PreviouslyReported.Keys);

module.exports = PreviouslyReported;