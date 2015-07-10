var StreamCommodityAltIDGrp = require('../components/StreamCommodityAltIDGrp');
var StreamAssetAttributeGrp = require('../components/StreamAssetAttributeGrp');
var StreamCommodityDataSourceGrp = require('../components/StreamCommodityDataSourceGrp');
var StreamCommoditySettlBusinessCenterGrp = require('../components/StreamCommoditySettlBusinessCenterGrp');
var StreamCommoditySettlPeriodGrp = require('../components/StreamCommoditySettlPeriodGrp');
var StreamCommodityBase = require('../fields/StreamCommodityBase');
var StreamCommodityType = require('../fields/StreamCommodityType');
var StreamCommoditySecurityID = require('../fields/StreamCommoditySecurityID');
var StreamCommoditySecurityIDSource = require('../fields/StreamCommoditySecurityIDSource');
var StreamCommodityDesc = require('../fields/StreamCommodityDesc');
var EncodedStreamCommodityDescLen = require('../fields/EncodedStreamCommodityDescLen');
var EncodedStreamCommodityDesc = require('../fields/EncodedStreamCommodityDesc');
var StreamCommodityDeliveryPricingRegion = require('../fields/StreamCommodityDeliveryPricingRegion');
var StreamCommodityUnitOfMeasure = require('../fields/StreamCommodityUnitOfMeasure');
var StreamCommodityCurrency = require('../fields/StreamCommodityCurrency');
var StreamCommodityExchange = require('../fields/StreamCommodityExchange');
var StreamCommodityRateSource = require('../fields/StreamCommodityRateSource');
var StreamCommodityRateReferencePage = require('../fields/StreamCommodityRateReferencePage');
var StreamCommodityRateReferencePageHeading = require('../fields/StreamCommodityRateReferencePageHeading');
var StreamDataProvider = require('../fields/StreamDataProvider');
var StreamCommodityPricingType = require('../fields/StreamCommodityPricingType');
var StreamCommodityNearbySettlDayPeriod = require('../fields/StreamCommodityNearbySettlDayPeriod');
var StreamCommodityNearbySettlDayUnit = require('../fields/StreamCommodityNearbySettlDayUnit');
var StreamCommoditySettlDateUnadjusted = require('../fields/StreamCommoditySettlDateUnadjusted');
var StreamCommoditySettlDateBusinessDayConvention = require('../fields/StreamCommoditySettlDateBusinessDayConvention');
var StreamCommoditySettlDateAdjusted = require('../fields/StreamCommoditySettlDateAdjusted');
var StreamCommoditySettlMonth = require('../fields/StreamCommoditySettlMonth');
var StreamCommoditySettlDateRollPeriod = require('../fields/StreamCommoditySettlDateRollPeriod');
var StreamCommoditySettlDateRollUnit = require('../fields/StreamCommoditySettlDateRollUnit');
var StreamCommoditySettlDayType = require('../fields/StreamCommoditySettlDayType');
var StreamCommodityXID = require('../fields/StreamCommodityXID');
var StreamCommodityXIDRef = require('../fields/StreamCommodityXIDRef');

function StreamCommodity (streamCommodity) {
  this.message = streamCommodity;
}
/* component */
StreamCommodity.prototype.streamCommodityAltIdgrp = function () {
  return this.message.groups[StreamCommodityAltIDGrp.Tag]
    .map(function (streamCommodityAltIdgrp) {
      return new StreamCommodityAltIDGrp(streamCommodityAltIdgrp);
  });
};

/* component */
StreamCommodity.prototype.streamAssetAttributeGrp = function () {
  return this.message.groups[StreamAssetAttributeGrp.Tag]
    .map(function (streamAssetAttributeGrp) {
      return new StreamAssetAttributeGrp(streamAssetAttributeGrp);
  });
};

/* component */
StreamCommodity.prototype.streamCommodityDataSourceGrp = function () {
  return this.message.groups[StreamCommodityDataSourceGrp.Tag]
    .map(function (streamCommodityDataSourceGrp) {
      return new StreamCommodityDataSourceGrp(streamCommodityDataSourceGrp);
  });
};

/* component */
StreamCommodity.prototype.streamCommoditySettlBusinessCenterGrp = function () {
  return this.message.groups[StreamCommoditySettlBusinessCenterGrp.Tag]
    .map(function (streamCommoditySettlBusinessCenterGrp) {
      return new StreamCommoditySettlBusinessCenterGrp(streamCommoditySettlBusinessCenterGrp);
  });
};

/* component */
StreamCommodity.prototype.streamCommoditySettlPeriodGrp = function () {
  return this.message.groups[StreamCommoditySettlPeriodGrp.Tag]
    .map(function (streamCommoditySettlPeriodGrp) {
      return new StreamCommoditySettlPeriodGrp(streamCommoditySettlPeriodGrp);
  });
};

/* field */
StreamCommodity.prototype.streamCommodityBase = function () {
  return new StreamCommodityBase(this.message.tags[StreamCommodityBase.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityType = function () {
  return new StreamCommodityType(this.message.tags[StreamCommodityType.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySecurityId = function () {
  return new StreamCommoditySecurityID(this.message.tags[StreamCommoditySecurityID.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySecurityIdsource = function () {
  return new StreamCommoditySecurityIDSource(this.message.tags[StreamCommoditySecurityIDSource.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityDesc = function () {
  return new StreamCommodityDesc(this.message.tags[StreamCommodityDesc.Tag]);
};

/* field */
StreamCommodity.prototype.encodedStreamCommodityDescLen = function () {
  return new EncodedStreamCommodityDescLen(this.message.tags[EncodedStreamCommodityDescLen.Tag]);
};

/* field */
StreamCommodity.prototype.encodedStreamCommodityDesc = function () {
  return new EncodedStreamCommodityDesc(this.message.tags[EncodedStreamCommodityDesc.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityDeliveryPricingRegion = function () {
  return new StreamCommodityDeliveryPricingRegion(this.message.tags[StreamCommodityDeliveryPricingRegion.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityUnitOfMeasure = function () {
  return new StreamCommodityUnitOfMeasure(this.message.tags[StreamCommodityUnitOfMeasure.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityCurrency = function () {
  return new StreamCommodityCurrency(this.message.tags[StreamCommodityCurrency.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityExchange = function () {
  return new StreamCommodityExchange(this.message.tags[StreamCommodityExchange.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityRateSource = function () {
  return new StreamCommodityRateSource(this.message.tags[StreamCommodityRateSource.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityRateReferencePage = function () {
  return new StreamCommodityRateReferencePage(this.message.tags[StreamCommodityRateReferencePage.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityRateReferencePageHeading = function () {
  return new StreamCommodityRateReferencePageHeading(this.message.tags[StreamCommodityRateReferencePageHeading.Tag]);
};

/* field */
StreamCommodity.prototype.streamDataProvider = function () {
  return new StreamDataProvider(this.message.tags[StreamDataProvider.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityPricingType = function () {
  return new StreamCommodityPricingType(this.message.tags[StreamCommodityPricingType.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityNearbySettlDayPeriod = function () {
  return new StreamCommodityNearbySettlDayPeriod(this.message.tags[StreamCommodityNearbySettlDayPeriod.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityNearbySettlDayUnit = function () {
  return new StreamCommodityNearbySettlDayUnit(this.message.tags[StreamCommodityNearbySettlDayUnit.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDateUnadjusted = function () {
  return new StreamCommoditySettlDateUnadjusted(this.message.tags[StreamCommoditySettlDateUnadjusted.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDateBusinessDayConvention = function () {
  return new StreamCommoditySettlDateBusinessDayConvention(this.message.tags[StreamCommoditySettlDateBusinessDayConvention.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDateAdjusted = function () {
  return new StreamCommoditySettlDateAdjusted(this.message.tags[StreamCommoditySettlDateAdjusted.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlMonth = function () {
  return new StreamCommoditySettlMonth(this.message.tags[StreamCommoditySettlMonth.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDateRollPeriod = function () {
  return new StreamCommoditySettlDateRollPeriod(this.message.tags[StreamCommoditySettlDateRollPeriod.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDateRollUnit = function () {
  return new StreamCommoditySettlDateRollUnit(this.message.tags[StreamCommoditySettlDateRollUnit.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommoditySettlDayType = function () {
  return new StreamCommoditySettlDayType(this.message.tags[StreamCommoditySettlDayType.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityXid = function () {
  return new StreamCommodityXID(this.message.tags[StreamCommodityXID.Tag]);
};

/* field */
StreamCommodity.prototype.streamCommodityXidref = function () {
  return new StreamCommodityXIDRef(this.message.tags[StreamCommodityXIDRef.Tag]);
};



StreamCommodity.Tag = '41251';

module.exports = StreamCommodity;