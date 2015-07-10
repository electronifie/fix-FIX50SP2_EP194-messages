var invert = require('invert-obj');

function LegAdditionalTermDiscrepancyClauseIndicator (legAdditionalTermDiscrepancyClauseIndicator) {
  this.message = legAdditionalTermDiscrepancyClauseIndicator;
}

LegAdditionalTermDiscrepancyClauseIndicator.prototype.value = function () {
  return this.message;
};

LegAdditionalTermDiscrepancyClauseIndicator.Tag = '41337';

LegAdditionalTermDiscrepancyClauseIndicator.Type = 'BOOLEAN';

module.exports = LegAdditionalTermDiscrepancyClauseIndicator;