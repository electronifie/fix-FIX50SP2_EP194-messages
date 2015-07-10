var LegDeliveryStreamCommoditySourceGrp = require('../components/LegDeliveryStreamCommoditySourceGrp');
var LegDeliveryStreamCycleGrp = require('../components/LegDeliveryStreamCycleGrp');
var LegDeliveryStreamType = require('../fields/LegDeliveryStreamType');
var LegDeliveryStreamPipeline = require('../fields/LegDeliveryStreamPipeline');
var LegDeliveryStreamEntryPoint = require('../fields/LegDeliveryStreamEntryPoint');
var LegDeliveryStreamWithdrawalPoint = require('../fields/LegDeliveryStreamWithdrawalPoint');
var LegDeliveryStreamDeliveryPoint = require('../fields/LegDeliveryStreamDeliveryPoint');
var LegDeliveryStreamDeliveryPointSource = require('../fields/LegDeliveryStreamDeliveryPointSource');
var LegDeliveryStreamDeliveryPointDesc = require('../fields/LegDeliveryStreamDeliveryPointDesc');
var LegDeliveryStreamDeliveryRestriction = require('../fields/LegDeliveryStreamDeliveryRestriction');
var LegDeliveryStreamDeliveryContingency = require('../fields/LegDeliveryStreamDeliveryContingency');
var LegDeliveryStreamDeliveryContingentPartySide = require('../fields/LegDeliveryStreamDeliveryContingentPartySide');
var LegDeliveryStreamDeliverAtSourceIndicator = require('../fields/LegDeliveryStreamDeliverAtSourceIndicator');
var LegDeliveryStreamRiskApportionment = require('../fields/LegDeliveryStreamRiskApportionment');
var LegDeliveryStreamRiskApportionmentSource = require('../fields/LegDeliveryStreamRiskApportionmentSource');
var LegDeliveryStreamTitleTransferLocation = require('../fields/LegDeliveryStreamTitleTransferLocation');
var LegDeliveryStreamTitleTransferCondition = require('../fields/LegDeliveryStreamTitleTransferCondition');
var LegDeliveryStreamImporterOfRecord = require('../fields/LegDeliveryStreamImporterOfRecord');
var LegDeliveryStreamNegativeTolerance = require('../fields/LegDeliveryStreamNegativeTolerance');
var LegDeliveryStreamPositiveTolerance = require('../fields/LegDeliveryStreamPositiveTolerance');
var LegDeliveryStreamToleranceUnitOfMeasure = require('../fields/LegDeliveryStreamToleranceUnitOfMeasure');
var LegDeliveryStreamToleranceType = require('../fields/LegDeliveryStreamToleranceType');
var LegDeliveryStreamToleranceOptionSide = require('../fields/LegDeliveryStreamToleranceOptionSide');
var LegDeliveryStreamTotalPositiveTolerance = require('../fields/LegDeliveryStreamTotalPositiveTolerance');
var LegDeliveryStreamTotalNegativeTolerance = require('../fields/LegDeliveryStreamTotalNegativeTolerance');
var LegDeliveryStreamNotionalConversionFactor = require('../fields/LegDeliveryStreamNotionalConversionFactor');
var LegDeliveryStreamTransportEquipment = require('../fields/LegDeliveryStreamTransportEquipment');
var LegDeliveryStreamElectingPartySide = require('../fields/LegDeliveryStreamElectingPartySide');

function LegDeliveryStream (legDeliveryStream) {
  this.message = legDeliveryStream;
}
/* component */
LegDeliveryStream.prototype.legDeliveryStreamCommoditySourceGrp = function () {
  return this.message.groups[LegDeliveryStreamCommoditySourceGrp.Tag]
    .map(function (legDeliveryStreamCommoditySourceGrp) {
      return new LegDeliveryStreamCommoditySourceGrp(legDeliveryStreamCommoditySourceGrp);
  });
};

/* component */
LegDeliveryStream.prototype.legDeliveryStreamCycleGrp = function () {
  return this.message.groups[LegDeliveryStreamCycleGrp.Tag]
    .map(function (legDeliveryStreamCycleGrp) {
      return new LegDeliveryStreamCycleGrp(legDeliveryStreamCycleGrp);
  });
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamType = function () {
  return new LegDeliveryStreamType(this.message.tags[LegDeliveryStreamType.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamPipeline = function () {
  return new LegDeliveryStreamPipeline(this.message.tags[LegDeliveryStreamPipeline.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamEntryPoint = function () {
  return new LegDeliveryStreamEntryPoint(this.message.tags[LegDeliveryStreamEntryPoint.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamWithdrawalPoint = function () {
  return new LegDeliveryStreamWithdrawalPoint(this.message.tags[LegDeliveryStreamWithdrawalPoint.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryPoint = function () {
  return new LegDeliveryStreamDeliveryPoint(this.message.tags[LegDeliveryStreamDeliveryPoint.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryPointSource = function () {
  return new LegDeliveryStreamDeliveryPointSource(this.message.tags[LegDeliveryStreamDeliveryPointSource.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryPointDesc = function () {
  return new LegDeliveryStreamDeliveryPointDesc(this.message.tags[LegDeliveryStreamDeliveryPointDesc.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryRestriction = function () {
  return new LegDeliveryStreamDeliveryRestriction(this.message.tags[LegDeliveryStreamDeliveryRestriction.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryContingency = function () {
  return new LegDeliveryStreamDeliveryContingency(this.message.tags[LegDeliveryStreamDeliveryContingency.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliveryContingentPartySide = function () {
  return new LegDeliveryStreamDeliveryContingentPartySide(this.message.tags[LegDeliveryStreamDeliveryContingentPartySide.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamDeliverAtSourceIndicator = function () {
  return new LegDeliveryStreamDeliverAtSourceIndicator(this.message.tags[LegDeliveryStreamDeliverAtSourceIndicator.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamRiskApportionment = function () {
  return new LegDeliveryStreamRiskApportionment(this.message.tags[LegDeliveryStreamRiskApportionment.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamRiskApportionmentSource = function () {
  return new LegDeliveryStreamRiskApportionmentSource(this.message.tags[LegDeliveryStreamRiskApportionmentSource.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamTitleTransferLocation = function () {
  return new LegDeliveryStreamTitleTransferLocation(this.message.tags[LegDeliveryStreamTitleTransferLocation.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamTitleTransferCondition = function () {
  return new LegDeliveryStreamTitleTransferCondition(this.message.tags[LegDeliveryStreamTitleTransferCondition.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamImporterOfRecord = function () {
  return new LegDeliveryStreamImporterOfRecord(this.message.tags[LegDeliveryStreamImporterOfRecord.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamNegativeTolerance = function () {
  return new LegDeliveryStreamNegativeTolerance(this.message.tags[LegDeliveryStreamNegativeTolerance.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamPositiveTolerance = function () {
  return new LegDeliveryStreamPositiveTolerance(this.message.tags[LegDeliveryStreamPositiveTolerance.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamToleranceUnitOfMeasure = function () {
  return new LegDeliveryStreamToleranceUnitOfMeasure(this.message.tags[LegDeliveryStreamToleranceUnitOfMeasure.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamToleranceType = function () {
  return new LegDeliveryStreamToleranceType(this.message.tags[LegDeliveryStreamToleranceType.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamToleranceOptionSide = function () {
  return new LegDeliveryStreamToleranceOptionSide(this.message.tags[LegDeliveryStreamToleranceOptionSide.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamTotalPositiveTolerance = function () {
  return new LegDeliveryStreamTotalPositiveTolerance(this.message.tags[LegDeliveryStreamTotalPositiveTolerance.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamTotalNegativeTolerance = function () {
  return new LegDeliveryStreamTotalNegativeTolerance(this.message.tags[LegDeliveryStreamTotalNegativeTolerance.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamNotionalConversionFactor = function () {
  return new LegDeliveryStreamNotionalConversionFactor(this.message.tags[LegDeliveryStreamNotionalConversionFactor.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamTransportEquipment = function () {
  return new LegDeliveryStreamTransportEquipment(this.message.tags[LegDeliveryStreamTransportEquipment.Tag]);
};

/* field */
LegDeliveryStream.prototype.legDeliveryStreamElectingPartySide = function () {
  return new LegDeliveryStreamElectingPartySide(this.message.tags[LegDeliveryStreamElectingPartySide.Tag]);
};



LegDeliveryStream.Tag = '41429';

module.exports = LegDeliveryStream;