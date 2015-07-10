var DeliveryStreamCommoditySourceGrp = require('../components/DeliveryStreamCommoditySourceGrp');
var DeliveryStreamCycleGrp = require('../components/DeliveryStreamCycleGrp');
var DeliveryStreamType = require('../fields/DeliveryStreamType');
var DeliveryStreamPipeline = require('../fields/DeliveryStreamPipeline');
var DeliveryStreamEntryPoint = require('../fields/DeliveryStreamEntryPoint');
var DeliveryStreamWithdrawalPoint = require('../fields/DeliveryStreamWithdrawalPoint');
var DeliveryStreamDeliveryPoint = require('../fields/DeliveryStreamDeliveryPoint');
var DeliveryStreamDeliveryPointSource = require('../fields/DeliveryStreamDeliveryPointSource');
var DeliveryStreamDeliveryPointDesc = require('../fields/DeliveryStreamDeliveryPointDesc');
var DeliveryStreamDeliveryRestriction = require('../fields/DeliveryStreamDeliveryRestriction');
var DeliveryStreamDeliveryContingency = require('../fields/DeliveryStreamDeliveryContingency');
var DeliveryStreamDeliveryContingentPartySide = require('../fields/DeliveryStreamDeliveryContingentPartySide');
var DeliveryStreamDeliverAtSourceIndicator = require('../fields/DeliveryStreamDeliverAtSourceIndicator');
var DeliveryStreamRiskApportionment = require('../fields/DeliveryStreamRiskApportionment');
var DeliveryStreamRiskApportionmentSource = require('../fields/DeliveryStreamRiskApportionmentSource');
var DeliveryStreamTitleTransferLocation = require('../fields/DeliveryStreamTitleTransferLocation');
var DeliveryStreamTitleTransferCondition = require('../fields/DeliveryStreamTitleTransferCondition');
var DeliveryStreamImporterOfRecord = require('../fields/DeliveryStreamImporterOfRecord');
var DeliveryStreamNegativeTolerance = require('../fields/DeliveryStreamNegativeTolerance');
var DeliveryStreamPositiveTolerance = require('../fields/DeliveryStreamPositiveTolerance');
var DeliveryStreamToleranceUnitOfMeasure = require('../fields/DeliveryStreamToleranceUnitOfMeasure');
var DeliveryStreamToleranceType = require('../fields/DeliveryStreamToleranceType');
var DeliveryStreamToleranceOptionSide = require('../fields/DeliveryStreamToleranceOptionSide');
var DeliveryStreamTotalPositiveTolerance = require('../fields/DeliveryStreamTotalPositiveTolerance');
var DeliveryStreamTotalNegativeTolerance = require('../fields/DeliveryStreamTotalNegativeTolerance');
var DeliveryStreamNotionalConversionFactor = require('../fields/DeliveryStreamNotionalConversionFactor');
var DeliveryStreamTransportEquipment = require('../fields/DeliveryStreamTransportEquipment');
var DeliveryStreamElectingPartySide = require('../fields/DeliveryStreamElectingPartySide');

function DeliveryStream (deliveryStream) {
  this.message = deliveryStream;
}
/* component */
DeliveryStream.prototype.deliveryStreamCommoditySourceGrp = function () {
  return this.message.groups[DeliveryStreamCommoditySourceGrp.Tag]
    .map(function (deliveryStreamCommoditySourceGrp) {
      return new DeliveryStreamCommoditySourceGrp(deliveryStreamCommoditySourceGrp);
  });
};

/* component */
DeliveryStream.prototype.deliveryStreamCycleGrp = function () {
  return this.message.groups[DeliveryStreamCycleGrp.Tag]
    .map(function (deliveryStreamCycleGrp) {
      return new DeliveryStreamCycleGrp(deliveryStreamCycleGrp);
  });
};

/* field */
DeliveryStream.prototype.deliveryStreamType = function () {
  return new DeliveryStreamType(this.message.tags[DeliveryStreamType.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamPipeline = function () {
  return new DeliveryStreamPipeline(this.message.tags[DeliveryStreamPipeline.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamEntryPoint = function () {
  return new DeliveryStreamEntryPoint(this.message.tags[DeliveryStreamEntryPoint.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamWithdrawalPoint = function () {
  return new DeliveryStreamWithdrawalPoint(this.message.tags[DeliveryStreamWithdrawalPoint.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryPoint = function () {
  return new DeliveryStreamDeliveryPoint(this.message.tags[DeliveryStreamDeliveryPoint.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryPointSource = function () {
  return new DeliveryStreamDeliveryPointSource(this.message.tags[DeliveryStreamDeliveryPointSource.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryPointDesc = function () {
  return new DeliveryStreamDeliveryPointDesc(this.message.tags[DeliveryStreamDeliveryPointDesc.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryRestriction = function () {
  return new DeliveryStreamDeliveryRestriction(this.message.tags[DeliveryStreamDeliveryRestriction.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryContingency = function () {
  return new DeliveryStreamDeliveryContingency(this.message.tags[DeliveryStreamDeliveryContingency.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliveryContingentPartySide = function () {
  return new DeliveryStreamDeliveryContingentPartySide(this.message.tags[DeliveryStreamDeliveryContingentPartySide.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamDeliverAtSourceIndicator = function () {
  return new DeliveryStreamDeliverAtSourceIndicator(this.message.tags[DeliveryStreamDeliverAtSourceIndicator.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamRiskApportionment = function () {
  return new DeliveryStreamRiskApportionment(this.message.tags[DeliveryStreamRiskApportionment.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamRiskApportionmentSource = function () {
  return new DeliveryStreamRiskApportionmentSource(this.message.tags[DeliveryStreamRiskApportionmentSource.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamTitleTransferLocation = function () {
  return new DeliveryStreamTitleTransferLocation(this.message.tags[DeliveryStreamTitleTransferLocation.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamTitleTransferCondition = function () {
  return new DeliveryStreamTitleTransferCondition(this.message.tags[DeliveryStreamTitleTransferCondition.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamImporterOfRecord = function () {
  return new DeliveryStreamImporterOfRecord(this.message.tags[DeliveryStreamImporterOfRecord.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamNegativeTolerance = function () {
  return new DeliveryStreamNegativeTolerance(this.message.tags[DeliveryStreamNegativeTolerance.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamPositiveTolerance = function () {
  return new DeliveryStreamPositiveTolerance(this.message.tags[DeliveryStreamPositiveTolerance.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamToleranceUnitOfMeasure = function () {
  return new DeliveryStreamToleranceUnitOfMeasure(this.message.tags[DeliveryStreamToleranceUnitOfMeasure.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamToleranceType = function () {
  return new DeliveryStreamToleranceType(this.message.tags[DeliveryStreamToleranceType.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamToleranceOptionSide = function () {
  return new DeliveryStreamToleranceOptionSide(this.message.tags[DeliveryStreamToleranceOptionSide.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamTotalPositiveTolerance = function () {
  return new DeliveryStreamTotalPositiveTolerance(this.message.tags[DeliveryStreamTotalPositiveTolerance.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamTotalNegativeTolerance = function () {
  return new DeliveryStreamTotalNegativeTolerance(this.message.tags[DeliveryStreamTotalNegativeTolerance.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamNotionalConversionFactor = function () {
  return new DeliveryStreamNotionalConversionFactor(this.message.tags[DeliveryStreamNotionalConversionFactor.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamTransportEquipment = function () {
  return new DeliveryStreamTransportEquipment(this.message.tags[DeliveryStreamTransportEquipment.Tag]);
};

/* field */
DeliveryStream.prototype.deliveryStreamElectingPartySide = function () {
  return new DeliveryStreamElectingPartySide(this.message.tags[DeliveryStreamElectingPartySide.Tag]);
};



DeliveryStream.Tag = '41058';

module.exports = DeliveryStream;