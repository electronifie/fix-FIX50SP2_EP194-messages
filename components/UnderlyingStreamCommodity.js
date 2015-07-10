var UnderlyingStreamCommodityAltIDGrp = require('../components/UnderlyingStreamCommodityAltIDGrp');
var UnderlyingStreamAssetAttributeGrp = require('../components/UnderlyingStreamAssetAttributeGrp');
var UnderlyingStreamCommodityDataSourceGrp = require('../components/UnderlyingStreamCommodityDataSourceGrp');
var UnderlyingStreamCommoditySettlBusinessCenterGrp = require('../components/UnderlyingStreamCommoditySettlBusinessCenterGrp');
var UnderlyingStreamCommoditySettlPeriodGrp = require('../components/UnderlyingStreamCommoditySettlPeriodGrp');
var UnderlyingStreamCommodityBase = require('../fields/UnderlyingStreamCommodityBase');
var UnderlyingStreamCommodityType = require('../fields/UnderlyingStreamCommodityType');
var UnderlyingStreamCommoditySecurityID = require('../fields/UnderlyingStreamCommoditySecurityID');
var UnderlyingStreamCommoditySecurityIDSource = require('../fields/UnderlyingStreamCommoditySecurityIDSource');
var UnderlyingStreamCommodityDesc = require('../fields/UnderlyingStreamCommodityDesc');
var EncodedUnderlyingStreamCommodityDescLen = require('../fields/EncodedUnderlyingStreamCommodityDescLen');
var EncodedUnderlyingStreamCommodityDesc = require('../fields/EncodedUnderlyingStreamCommodityDesc');
var UnderlyingStreamCommodityDeliveryPricingRegion = require('../fields/UnderlyingStreamCommodityDeliveryPricingRegion');
var UnderlyingStreamCommodityUnitOfMeasure = require('../fields/UnderlyingStreamCommodityUnitOfMeasure');
var UnderlyingStreamCommodityCurrency = require('../fields/UnderlyingStreamCommodityCurrency');
var UnderlyingStreamCommodityExchange = require('../fields/UnderlyingStreamCommodityExchange');
var UnderlyingStreamCommodityRateSource = require('../fields/UnderlyingStreamCommodityRateSource');
var UnderlyingStreamCommodityRateReferencePage = require('../fields/UnderlyingStreamCommodityRateReferencePage');
var UnderlyingStreamCommodityRateReferencePageHeading = require('../fields/UnderlyingStreamCommodityRateReferencePageHeading');
var UnderlyingStreamDataProvider = require('../fields/UnderlyingStreamDataProvider');
var UnderlyingStreamCommodityPricingType = require('../fields/UnderlyingStreamCommodityPricingType');
var UnderlyingStreamCommodityNearbySettlDayPeriod = require('../fields/UnderlyingStreamCommodityNearbySettlDayPeriod');
var UnderlyingStreamCommodityNearbySettlDayUnit = require('../fields/UnderlyingStreamCommodityNearbySettlDayUnit');
var UnderlyingStreamCommoditySettlDateUnadjusted = require('../fields/UnderlyingStreamCommoditySettlDateUnadjusted');
var UnderlyingStreamCommoditySettlDateBusinessDayConvention = require('../fields/UnderlyingStreamCommoditySettlDateBusinessDayConvention');
var UnderlyingStreamCommoditySettlDateAdjusted = require('../fields/UnderlyingStreamCommoditySettlDateAdjusted');
var UnderlyingStreamCommoditySettlMonth = require('../fields/UnderlyingStreamCommoditySettlMonth');
var UnderlyingStreamCommoditySettlDateRollPeriod = require('../fields/UnderlyingStreamCommoditySettlDateRollPeriod');
var UnderlyingStreamCommoditySettlDateRollUnit = require('../fields/UnderlyingStreamCommoditySettlDateRollUnit');
var UnderlyingStreamCommoditySettlDayType = require('../fields/UnderlyingStreamCommoditySettlDayType');
var UnderlyingStreamCommodityXID = require('../fields/UnderlyingStreamCommodityXID');
var UnderlyingStreamCommodityXIDRef = require('../fields/UnderlyingStreamCommodityXIDRef');

function UnderlyingStreamCommodity (underlyingStreamCommodity) {
  this.message = underlyingStreamCommodity;
}
/* component */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityAltIdgrp = function () {
  return this.message.groups[UnderlyingStreamCommodityAltIDGrp.Tag]
    .map(function (underlyingStreamCommodityAltIdgrp) {
      return new UnderlyingStreamCommodityAltIDGrp(underlyingStreamCommodityAltIdgrp);
  });
};

/* component */
UnderlyingStreamCommodity.prototype.underlyingStreamAssetAttributeGrp = function () {
  return this.message.groups[UnderlyingStreamAssetAttributeGrp.Tag]
    .map(function (underlyingStreamAssetAttributeGrp) {
      return new UnderlyingStreamAssetAttributeGrp(underlyingStreamAssetAttributeGrp);
  });
};

/* component */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityDataSourceGrp = function () {
  return this.message.groups[UnderlyingStreamCommodityDataSourceGrp.Tag]
    .map(function (underlyingStreamCommodityDataSourceGrp) {
      return new UnderlyingStreamCommodityDataSourceGrp(underlyingStreamCommodityDataSourceGrp);
  });
};

/* component */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingStreamCommoditySettlBusinessCenterGrp.Tag]
    .map(function (underlyingStreamCommoditySettlBusinessCenterGrp) {
      return new UnderlyingStreamCommoditySettlBusinessCenterGrp(underlyingStreamCommoditySettlBusinessCenterGrp);
  });
};

/* component */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlPeriodGrp = function () {
  return this.message.groups[UnderlyingStreamCommoditySettlPeriodGrp.Tag]
    .map(function (underlyingStreamCommoditySettlPeriodGrp) {
      return new UnderlyingStreamCommoditySettlPeriodGrp(underlyingStreamCommoditySettlPeriodGrp);
  });
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityBase = function () {
  return new UnderlyingStreamCommodityBase(this.message.tags[UnderlyingStreamCommodityBase.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityType = function () {
  return new UnderlyingStreamCommodityType(this.message.tags[UnderlyingStreamCommodityType.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySecurityId = function () {
  return new UnderlyingStreamCommoditySecurityID(this.message.tags[UnderlyingStreamCommoditySecurityID.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySecurityIdsource = function () {
  return new UnderlyingStreamCommoditySecurityIDSource(this.message.tags[UnderlyingStreamCommoditySecurityIDSource.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityDesc = function () {
  return new UnderlyingStreamCommodityDesc(this.message.tags[UnderlyingStreamCommodityDesc.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.encodedUnderlyingStreamCommodityDescLen = function () {
  return new EncodedUnderlyingStreamCommodityDescLen(this.message.tags[EncodedUnderlyingStreamCommodityDescLen.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.encodedUnderlyingStreamCommodityDesc = function () {
  return new EncodedUnderlyingStreamCommodityDesc(this.message.tags[EncodedUnderlyingStreamCommodityDesc.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityDeliveryPricingRegion = function () {
  return new UnderlyingStreamCommodityDeliveryPricingRegion(this.message.tags[UnderlyingStreamCommodityDeliveryPricingRegion.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityUnitOfMeasure = function () {
  return new UnderlyingStreamCommodityUnitOfMeasure(this.message.tags[UnderlyingStreamCommodityUnitOfMeasure.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityCurrency = function () {
  return new UnderlyingStreamCommodityCurrency(this.message.tags[UnderlyingStreamCommodityCurrency.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityExchange = function () {
  return new UnderlyingStreamCommodityExchange(this.message.tags[UnderlyingStreamCommodityExchange.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityRateSource = function () {
  return new UnderlyingStreamCommodityRateSource(this.message.tags[UnderlyingStreamCommodityRateSource.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityRateReferencePage = function () {
  return new UnderlyingStreamCommodityRateReferencePage(this.message.tags[UnderlyingStreamCommodityRateReferencePage.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityRateReferencePageHeading = function () {
  return new UnderlyingStreamCommodityRateReferencePageHeading(this.message.tags[UnderlyingStreamCommodityRateReferencePageHeading.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamDataProvider = function () {
  return new UnderlyingStreamDataProvider(this.message.tags[UnderlyingStreamDataProvider.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityPricingType = function () {
  return new UnderlyingStreamCommodityPricingType(this.message.tags[UnderlyingStreamCommodityPricingType.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityNearbySettlDayPeriod = function () {
  return new UnderlyingStreamCommodityNearbySettlDayPeriod(this.message.tags[UnderlyingStreamCommodityNearbySettlDayPeriod.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityNearbySettlDayUnit = function () {
  return new UnderlyingStreamCommodityNearbySettlDayUnit(this.message.tags[UnderlyingStreamCommodityNearbySettlDayUnit.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDateUnadjusted = function () {
  return new UnderlyingStreamCommoditySettlDateUnadjusted(this.message.tags[UnderlyingStreamCommoditySettlDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDateBusinessDayConvention = function () {
  return new UnderlyingStreamCommoditySettlDateBusinessDayConvention(this.message.tags[UnderlyingStreamCommoditySettlDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDateAdjusted = function () {
  return new UnderlyingStreamCommoditySettlDateAdjusted(this.message.tags[UnderlyingStreamCommoditySettlDateAdjusted.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlMonth = function () {
  return new UnderlyingStreamCommoditySettlMonth(this.message.tags[UnderlyingStreamCommoditySettlMonth.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDateRollPeriod = function () {
  return new UnderlyingStreamCommoditySettlDateRollPeriod(this.message.tags[UnderlyingStreamCommoditySettlDateRollPeriod.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDateRollUnit = function () {
  return new UnderlyingStreamCommoditySettlDateRollUnit(this.message.tags[UnderlyingStreamCommoditySettlDateRollUnit.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommoditySettlDayType = function () {
  return new UnderlyingStreamCommoditySettlDayType(this.message.tags[UnderlyingStreamCommoditySettlDayType.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityXid = function () {
  return new UnderlyingStreamCommodityXID(this.message.tags[UnderlyingStreamCommodityXID.Tag]);
};

/* field */
UnderlyingStreamCommodity.prototype.underlyingStreamCommodityXidref = function () {
  return new UnderlyingStreamCommodityXIDRef(this.message.tags[UnderlyingStreamCommodityXIDRef.Tag]);
};



UnderlyingStreamCommodity.Tag = '41964';

module.exports = UnderlyingStreamCommodity;