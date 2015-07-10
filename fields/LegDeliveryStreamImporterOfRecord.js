var invert = require('invert-obj');

function LegDeliveryStreamImporterOfRecord (legDeliveryStreamImporterOfRecord) {
  this.message = legDeliveryStreamImporterOfRecord;
}

LegDeliveryStreamImporterOfRecord.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamImporterOfRecord.Tag = '41441';

LegDeliveryStreamImporterOfRecord.Type = 'STRING';

module.exports = LegDeliveryStreamImporterOfRecord;