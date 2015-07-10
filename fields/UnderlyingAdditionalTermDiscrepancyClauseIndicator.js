var invert = require('invert-obj');

function UnderlyingAdditionalTermDiscrepancyClauseIndicator (underlyingAdditionalTermDiscrepancyClauseIndicator) {
  this.message = underlyingAdditionalTermDiscrepancyClauseIndicator;
}

UnderlyingAdditionalTermDiscrepancyClauseIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermDiscrepancyClauseIndicator.Tag = '42038';

UnderlyingAdditionalTermDiscrepancyClauseIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingAdditionalTermDiscrepancyClauseIndicator;