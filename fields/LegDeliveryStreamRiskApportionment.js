var invert = require('invert-obj');

function LegDeliveryStreamRiskApportionment (legDeliveryStreamRiskApportionment) {
  this.message = legDeliveryStreamRiskApportionment;
}

LegDeliveryStreamRiskApportionment.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamRiskApportionment.Tag = '41438';

LegDeliveryStreamRiskApportionment.Type = 'STRING';

module.exports = LegDeliveryStreamRiskApportionment;