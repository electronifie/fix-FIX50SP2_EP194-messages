var invert = require('invert-obj');

function LegDeliveryStreamDeliveryContingentPartySide (legDeliveryStreamDeliveryContingentPartySide) {
  this.message = legDeliveryStreamDeliveryContingentPartySide;
}

LegDeliveryStreamDeliveryContingentPartySide.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryContingentPartySide.Tag = '41436';

LegDeliveryStreamDeliveryContingentPartySide.Type = 'INT';

module.exports = LegDeliveryStreamDeliveryContingentPartySide;