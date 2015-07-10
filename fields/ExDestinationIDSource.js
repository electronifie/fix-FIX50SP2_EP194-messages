var invert = require('invert-obj');

function ExDestinationIDSource (exDestinationIdsource) {
  this.message = exDestinationIdsource;
}

ExDestinationIDSource.prototype.value = function () {
  return this.message;
};


ExDestinationIDSource.Keys = {
  BIC: 'B',
  GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER: 'C',
  PROPRIETARY_CUSTOM_CODE: 'D',
  ISO_COUNTRY_CODE: 'E',
  MIC: 'G',
};

ExDestinationIDSource.Tag = '1133';

ExDestinationIDSource.Type = 'CHAR';

ExDestinationIDSource.Values = invert(ExDestinationIDSource.Keys);

module.exports = ExDestinationIDSource;