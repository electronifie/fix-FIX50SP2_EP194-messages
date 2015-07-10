var invert = require('invert-obj');

function AdditionalTermDiscrepancyClauseIndicator (additionalTermDiscrepancyClauseIndicator) {
  this.message = additionalTermDiscrepancyClauseIndicator;
}

AdditionalTermDiscrepancyClauseIndicator.prototype.value = function () {
  return this.message;
};

AdditionalTermDiscrepancyClauseIndicator.Tag = '40021';

AdditionalTermDiscrepancyClauseIndicator.Type = 'BOOLEAN';

module.exports = AdditionalTermDiscrepancyClauseIndicator;