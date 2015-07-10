var LegStreamCommodityAltIDGrp = require('../components/LegStreamCommodityAltIDGrp');
var LegStreamAssetAttributeGrp = require('../components/LegStreamAssetAttributeGrp');
var LegStreamCommodityDataSourceGrp = require('../components/LegStreamCommodityDataSourceGrp');
var LegStreamCommoditySettlBusinessCenterGrp = require('../components/LegStreamCommoditySettlBusinessCenterGrp');
var LegStreamCommoditySettlPeriodGrp = require('../components/LegStreamCommoditySettlPeriodGrp');
var LegStreamCommodityBase = require('../fields/LegStreamCommodityBase');
var LegStreamCommodityType = require('../fields/LegStreamCommodityType');
var LegStreamCommoditySecurityID = require('../fields/LegStreamCommoditySecurityID');
var LegStreamCommoditySecurityIDSource = require('../fields/LegStreamCommoditySecurityIDSource');
var LegStreamCommodityDesc = require('../fields/LegStreamCommodityDesc');
var EncodedLegStreamCommodityDescLen = require('../fields/EncodedLegStreamCommodityDescLen');
var EncodedLegStreamCommodityDesc = require('../fields/EncodedLegStreamCommodityDesc');
var LegStreamCommodityDeliveryPricingRegion = require('../fields/LegStreamCommodityDeliveryPricingRegion');
var LegStreamCommodityUnitOfMeasure = require('../fields/LegStreamCommodityUnitOfMeasure');
var LegStreamCommodityCurrency = require('../fields/LegStreamCommodityCurrency');
var LegStreamCommodityExchange = require('../fields/LegStreamCommodityExchange');
var LegStreamCommodityRateSource = require('../fields/LegStreamCommodityRateSource');
var LegStreamCommodityRateReferencePage = require('../fields/LegStreamCommodityRateReferencePage');
var LegStreamCommodityRateReferencePageHeading = require('../fields/LegStreamCommodityRateReferencePageHeading');
var LegStreamDataProvider = require('../fields/LegStreamDataProvider');
var LegStreamCommodityPricingType = require('../fields/LegStreamCommodityPricingType');
var LegStreamCommodityNearbySettlDayPeriod = require('../fields/LegStreamCommodityNearbySettlDayPeriod');
var LegStreamCommodityNearbySettlDayUnit = require('../fields/LegStreamCommodityNearbySettlDayUnit');
var LegStreamCommoditySettlDateUnadjusted = require('../fields/LegStreamCommoditySettlDateUnadjusted');
var LegStreamCommoditySettlDateBusinessDayConvention = require('../fields/LegStreamCommoditySettlDateBusinessDayConvention');
var LegStreamCommoditySettlDateAdjusted = require('../fields/LegStreamCommoditySettlDateAdjusted');
var LegStreamCommoditySettlMonth = require('../fields/LegStreamCommoditySettlMonth');
var LegStreamCommoditySettlDateRollPeriod = require('../fields/LegStreamCommoditySettlDateRollPeriod');
var LegStreamCommoditySettlDateRollUnit = require('../fields/LegStreamCommoditySettlDateRollUnit');
var LegStreamCommoditySettlDayType = require('../fields/LegStreamCommoditySettlDayType');
var LegStreamCommodityXID = require('../fields/LegStreamCommodityXID');
var LegStreamCommodityXIDRef = require('../fields/LegStreamCommodityXIDRef');

function LegStreamCommodity (legStreamCommodity) {
  this.message = legStreamCommodity;
}
/* component */
LegStreamCommodity.prototype.legStreamCommodityAltIdgrp = function () {
  return this.message.groups[LegStreamCommodityAltIDGrp.Tag]
    .map(function (legStreamCommodityAltIdgrp) {
      return new LegStreamCommodityAltIDGrp(legStreamCommodityAltIdgrp);
  });
};

/* component */
LegStreamCommodity.prototype.legStreamAssetAttributeGrp = function () {
  return this.message.groups[LegStreamAssetAttributeGrp.Tag]
    .map(function (legStreamAssetAttributeGrp) {
      return new LegStreamAssetAttributeGrp(legStreamAssetAttributeGrp);
  });
};

/* component */
LegStreamCommodity.prototype.legStreamCommodityDataSourceGrp = function () {
  return this.message.groups[LegStreamCommodityDataSourceGrp.Tag]
    .map(function (legStreamCommodityDataSourceGrp) {
      return new LegStreamCommodityDataSourceGrp(legStreamCommodityDataSourceGrp);
  });
};

/* component */
LegStreamCommodity.prototype.legStreamCommoditySettlBusinessCenterGrp = function () {
  return this.message.groups[LegStreamCommoditySettlBusinessCenterGrp.Tag]
    .map(function (legStreamCommoditySettlBusinessCenterGrp) {
      return new LegStreamCommoditySettlBusinessCenterGrp(legStreamCommoditySettlBusinessCenterGrp);
  });
};

/* component */
LegStreamCommodity.prototype.legStreamCommoditySettlPeriodGrp = function () {
  return this.message.groups[LegStreamCommoditySettlPeriodGrp.Tag]
    .map(function (legStreamCommoditySettlPeriodGrp) {
      return new LegStreamCommoditySettlPeriodGrp(legStreamCommoditySettlPeriodGrp);
  });
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityBase = function () {
  return new LegStreamCommodityBase(this.message.tags[LegStreamCommodityBase.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityType = function () {
  return new LegStreamCommodityType(this.message.tags[LegStreamCommodityType.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySecurityId = function () {
  return new LegStreamCommoditySecurityID(this.message.tags[LegStreamCommoditySecurityID.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySecurityIdsource = function () {
  return new LegStreamCommoditySecurityIDSource(this.message.tags[LegStreamCommoditySecurityIDSource.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityDesc = function () {
  return new LegStreamCommodityDesc(this.message.tags[LegStreamCommodityDesc.Tag]);
};

/* field */
LegStreamCommodity.prototype.encodedLegStreamCommodityDescLen = function () {
  return new EncodedLegStreamCommodityDescLen(this.message.tags[EncodedLegStreamCommodityDescLen.Tag]);
};

/* field */
LegStreamCommodity.prototype.encodedLegStreamCommodityDesc = function () {
  return new EncodedLegStreamCommodityDesc(this.message.tags[EncodedLegStreamCommodityDesc.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityDeliveryPricingRegion = function () {
  return new LegStreamCommodityDeliveryPricingRegion(this.message.tags[LegStreamCommodityDeliveryPricingRegion.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityUnitOfMeasure = function () {
  return new LegStreamCommodityUnitOfMeasure(this.message.tags[LegStreamCommodityUnitOfMeasure.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityCurrency = function () {
  return new LegStreamCommodityCurrency(this.message.tags[LegStreamCommodityCurrency.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityExchange = function () {
  return new LegStreamCommodityExchange(this.message.tags[LegStreamCommodityExchange.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityRateSource = function () {
  return new LegStreamCommodityRateSource(this.message.tags[LegStreamCommodityRateSource.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityRateReferencePage = function () {
  return new LegStreamCommodityRateReferencePage(this.message.tags[LegStreamCommodityRateReferencePage.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityRateReferencePageHeading = function () {
  return new LegStreamCommodityRateReferencePageHeading(this.message.tags[LegStreamCommodityRateReferencePageHeading.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamDataProvider = function () {
  return new LegStreamDataProvider(this.message.tags[LegStreamDataProvider.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityPricingType = function () {
  return new LegStreamCommodityPricingType(this.message.tags[LegStreamCommodityPricingType.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityNearbySettlDayPeriod = function () {
  return new LegStreamCommodityNearbySettlDayPeriod(this.message.tags[LegStreamCommodityNearbySettlDayPeriod.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityNearbySettlDayUnit = function () {
  return new LegStreamCommodityNearbySettlDayUnit(this.message.tags[LegStreamCommodityNearbySettlDayUnit.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDateUnadjusted = function () {
  return new LegStreamCommoditySettlDateUnadjusted(this.message.tags[LegStreamCommoditySettlDateUnadjusted.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDateBusinessDayConvention = function () {
  return new LegStreamCommoditySettlDateBusinessDayConvention(this.message.tags[LegStreamCommoditySettlDateBusinessDayConvention.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDateAdjusted = function () {
  return new LegStreamCommoditySettlDateAdjusted(this.message.tags[LegStreamCommoditySettlDateAdjusted.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlMonth = function () {
  return new LegStreamCommoditySettlMonth(this.message.tags[LegStreamCommoditySettlMonth.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDateRollPeriod = function () {
  return new LegStreamCommoditySettlDateRollPeriod(this.message.tags[LegStreamCommoditySettlDateRollPeriod.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDateRollUnit = function () {
  return new LegStreamCommoditySettlDateRollUnit(this.message.tags[LegStreamCommoditySettlDateRollUnit.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommoditySettlDayType = function () {
  return new LegStreamCommoditySettlDayType(this.message.tags[LegStreamCommoditySettlDayType.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityXid = function () {
  return new LegStreamCommodityXID(this.message.tags[LegStreamCommodityXID.Tag]);
};

/* field */
LegStreamCommodity.prototype.legStreamCommodityXidref = function () {
  return new LegStreamCommodityXIDRef(this.message.tags[LegStreamCommodityXIDRef.Tag]);
};



LegStreamCommodity.Tag = '41648';

module.exports = LegStreamCommodity;