var UnderlyingDeliveryStreamCommoditySourceGrp = require('../components/UnderlyingDeliveryStreamCommoditySourceGrp');
var UnderlyingDeliveryStreamCycleGrp = require('../components/UnderlyingDeliveryStreamCycleGrp');
var UnderlyingDeliveryStreamType = require('../fields/UnderlyingDeliveryStreamType');
var UnderlyingDeliveryStreamPipeline = require('../fields/UnderlyingDeliveryStreamPipeline');
var UnderlyingDeliveryStreamEntryPoint = require('../fields/UnderlyingDeliveryStreamEntryPoint');
var UnderlyingDeliveryStreamWithdrawalPoint = require('../fields/UnderlyingDeliveryStreamWithdrawalPoint');
var UnderlyingDeliveryStreamDeliveryPoint = require('../fields/UnderlyingDeliveryStreamDeliveryPoint');
var UnderlyingDeliveryStreamDeliveryPointSource = require('../fields/UnderlyingDeliveryStreamDeliveryPointSource');
var UnderlyingDeliveryStreamDeliveryPointDesc = require('../fields/UnderlyingDeliveryStreamDeliveryPointDesc');
var UnderlyingDeliveryStreamDeliveryRestriction = require('../fields/UnderlyingDeliveryStreamDeliveryRestriction');
var UnderlyingDeliveryStreamDeliveryContingency = require('../fields/UnderlyingDeliveryStreamDeliveryContingency');
var UnderlyingDeliveryStreamDeliveryContingentPartySide = require('../fields/UnderlyingDeliveryStreamDeliveryContingentPartySide');
var UnderlyingDeliveryStreamDeliverAtSourceIndicator = require('../fields/UnderlyingDeliveryStreamDeliverAtSourceIndicator');
var UnderlyingDeliveryStreamRiskApportionment = require('../fields/UnderlyingDeliveryStreamRiskApportionment');
var UnderlyingDeliveryStreamRiskApportionmentSource = require('../fields/UnderlyingDeliveryStreamRiskApportionmentSource');
var UnderlyingDeliveryStreamTitleTransferLocation = require('../fields/UnderlyingDeliveryStreamTitleTransferLocation');
var UnderlyingDeliveryStreamTitleTransferCondition = require('../fields/UnderlyingDeliveryStreamTitleTransferCondition');
var UnderlyingDeliveryStreamImporterOfRecord = require('../fields/UnderlyingDeliveryStreamImporterOfRecord');
var UnderlyingDeliveryStreamNegativeTolerance = require('../fields/UnderlyingDeliveryStreamNegativeTolerance');
var UnderlyingDeliveryStreamPositiveTolerance = require('../fields/UnderlyingDeliveryStreamPositiveTolerance');
var UnderlyingDeliveryStreamToleranceUnitOfMeasure = require('../fields/UnderlyingDeliveryStreamToleranceUnitOfMeasure');
var UnderlyingDeliveryStreamToleranceType = require('../fields/UnderlyingDeliveryStreamToleranceType');
var UnderlyingDeliveryStreamToleranceOptionSide = require('../fields/UnderlyingDeliveryStreamToleranceOptionSide');
var UnderlyingDeliveryStreamTotalPositiveTolerance = require('../fields/UnderlyingDeliveryStreamTotalPositiveTolerance');
var UnderlyingDeliveryStreamTotalNegativeTolerance = require('../fields/UnderlyingDeliveryStreamTotalNegativeTolerance');
var UnderlyingDeliveryStreamNotionalConversionFactor = require('../fields/UnderlyingDeliveryStreamNotionalConversionFactor');
var UnderlyingDeliveryStreamTransportEquipment = require('../fields/UnderlyingDeliveryStreamTransportEquipment');
var UnderlyingDeliveryStreamElectingPartySide = require('../fields/UnderlyingDeliveryStreamElectingPartySide');

function UnderlyingDeliveryStream (underlyingDeliveryStream) {
  this.message = underlyingDeliveryStream;
}
/* component */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamCommoditySourceGrp = function () {
  return this.message.groups[UnderlyingDeliveryStreamCommoditySourceGrp.Tag]
    .map(function (underlyingDeliveryStreamCommoditySourceGrp) {
      return new UnderlyingDeliveryStreamCommoditySourceGrp(underlyingDeliveryStreamCommoditySourceGrp);
  });
};

/* component */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamCycleGrp = function () {
  return this.message.groups[UnderlyingDeliveryStreamCycleGrp.Tag]
    .map(function (underlyingDeliveryStreamCycleGrp) {
      return new UnderlyingDeliveryStreamCycleGrp(underlyingDeliveryStreamCycleGrp);
  });
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamType = function () {
  return new UnderlyingDeliveryStreamType(this.message.tags[UnderlyingDeliveryStreamType.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamPipeline = function () {
  return new UnderlyingDeliveryStreamPipeline(this.message.tags[UnderlyingDeliveryStreamPipeline.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamEntryPoint = function () {
  return new UnderlyingDeliveryStreamEntryPoint(this.message.tags[UnderlyingDeliveryStreamEntryPoint.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamWithdrawalPoint = function () {
  return new UnderlyingDeliveryStreamWithdrawalPoint(this.message.tags[UnderlyingDeliveryStreamWithdrawalPoint.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryPoint = function () {
  return new UnderlyingDeliveryStreamDeliveryPoint(this.message.tags[UnderlyingDeliveryStreamDeliveryPoint.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryPointSource = function () {
  return new UnderlyingDeliveryStreamDeliveryPointSource(this.message.tags[UnderlyingDeliveryStreamDeliveryPointSource.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryPointDesc = function () {
  return new UnderlyingDeliveryStreamDeliveryPointDesc(this.message.tags[UnderlyingDeliveryStreamDeliveryPointDesc.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryRestriction = function () {
  return new UnderlyingDeliveryStreamDeliveryRestriction(this.message.tags[UnderlyingDeliveryStreamDeliveryRestriction.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryContingency = function () {
  return new UnderlyingDeliveryStreamDeliveryContingency(this.message.tags[UnderlyingDeliveryStreamDeliveryContingency.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliveryContingentPartySide = function () {
  return new UnderlyingDeliveryStreamDeliveryContingentPartySide(this.message.tags[UnderlyingDeliveryStreamDeliveryContingentPartySide.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamDeliverAtSourceIndicator = function () {
  return new UnderlyingDeliveryStreamDeliverAtSourceIndicator(this.message.tags[UnderlyingDeliveryStreamDeliverAtSourceIndicator.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamRiskApportionment = function () {
  return new UnderlyingDeliveryStreamRiskApportionment(this.message.tags[UnderlyingDeliveryStreamRiskApportionment.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamRiskApportionmentSource = function () {
  return new UnderlyingDeliveryStreamRiskApportionmentSource(this.message.tags[UnderlyingDeliveryStreamRiskApportionmentSource.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamTitleTransferLocation = function () {
  return new UnderlyingDeliveryStreamTitleTransferLocation(this.message.tags[UnderlyingDeliveryStreamTitleTransferLocation.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamTitleTransferCondition = function () {
  return new UnderlyingDeliveryStreamTitleTransferCondition(this.message.tags[UnderlyingDeliveryStreamTitleTransferCondition.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamImporterOfRecord = function () {
  return new UnderlyingDeliveryStreamImporterOfRecord(this.message.tags[UnderlyingDeliveryStreamImporterOfRecord.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamNegativeTolerance = function () {
  return new UnderlyingDeliveryStreamNegativeTolerance(this.message.tags[UnderlyingDeliveryStreamNegativeTolerance.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamPositiveTolerance = function () {
  return new UnderlyingDeliveryStreamPositiveTolerance(this.message.tags[UnderlyingDeliveryStreamPositiveTolerance.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamToleranceUnitOfMeasure = function () {
  return new UnderlyingDeliveryStreamToleranceUnitOfMeasure(this.message.tags[UnderlyingDeliveryStreamToleranceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamToleranceType = function () {
  return new UnderlyingDeliveryStreamToleranceType(this.message.tags[UnderlyingDeliveryStreamToleranceType.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamToleranceOptionSide = function () {
  return new UnderlyingDeliveryStreamToleranceOptionSide(this.message.tags[UnderlyingDeliveryStreamToleranceOptionSide.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamTotalPositiveTolerance = function () {
  return new UnderlyingDeliveryStreamTotalPositiveTolerance(this.message.tags[UnderlyingDeliveryStreamTotalPositiveTolerance.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamTotalNegativeTolerance = function () {
  return new UnderlyingDeliveryStreamTotalNegativeTolerance(this.message.tags[UnderlyingDeliveryStreamTotalNegativeTolerance.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamNotionalConversionFactor = function () {
  return new UnderlyingDeliveryStreamNotionalConversionFactor(this.message.tags[UnderlyingDeliveryStreamNotionalConversionFactor.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamTransportEquipment = function () {
  return new UnderlyingDeliveryStreamTransportEquipment(this.message.tags[UnderlyingDeliveryStreamTransportEquipment.Tag]);
};

/* field */
UnderlyingDeliveryStream.prototype.underlyingDeliveryStreamElectingPartySide = function () {
  return new UnderlyingDeliveryStreamElectingPartySide(this.message.tags[UnderlyingDeliveryStreamElectingPartySide.Tag]);
};



UnderlyingDeliveryStream.Tag = '41777';

module.exports = UnderlyingDeliveryStream;