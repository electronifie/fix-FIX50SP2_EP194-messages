var invert = require('invert-obj');

function DeliveryStreamImporterOfRecord (deliveryStreamImporterOfRecord) {
  this.message = deliveryStreamImporterOfRecord;
}

DeliveryStreamImporterOfRecord.prototype.value = function () {
  return this.message;
};

DeliveryStreamImporterOfRecord.Tag = '41070';

DeliveryStreamImporterOfRecord.Type = 'STRING';

module.exports = DeliveryStreamImporterOfRecord;