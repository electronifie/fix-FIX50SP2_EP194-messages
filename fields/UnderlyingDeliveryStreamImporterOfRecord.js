var invert = require('invert-obj');

function UnderlyingDeliveryStreamImporterOfRecord (underlyingDeliveryStreamImporterOfRecord) {
  this.message = underlyingDeliveryStreamImporterOfRecord;
}

UnderlyingDeliveryStreamImporterOfRecord.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamImporterOfRecord.Tag = '41789';

UnderlyingDeliveryStreamImporterOfRecord.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamImporterOfRecord;