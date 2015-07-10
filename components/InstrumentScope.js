var InstrumentScopeSecurityAltIDGrp = require('../components/InstrumentScopeSecurityAltIDGrp');
var InstrumentScopeSymbol = require('../fields/InstrumentScopeSymbol');
var InstrumentScopeSymbolSfx = require('../fields/InstrumentScopeSymbolSfx');
var InstrumentScopeSecurityID = require('../fields/InstrumentScopeSecurityID');
var InstrumentScopeSecurityIDSource = require('../fields/InstrumentScopeSecurityIDSource');
var InstrumentScopeProduct = require('../fields/InstrumentScopeProduct');
var InstrumentScopeProductComplex = require('../fields/InstrumentScopeProductComplex');
var InstrumentScopeSecurityGroup = require('../fields/InstrumentScopeSecurityGroup');
var InstrumentScopeCFICode = require('../fields/InstrumentScopeCFICode');
var InstrumentScopeSecurityType = require('../fields/InstrumentScopeSecurityType');
var InstrumentScopeSecuritySubType = require('../fields/InstrumentScopeSecuritySubType');
var InstrumentScopeMaturityMonthYear = require('../fields/InstrumentScopeMaturityMonthYear');
var InstrumentScopeMaturityTime = require('../fields/InstrumentScopeMaturityTime');
var InstrumentScopeRestructuringType = require('../fields/InstrumentScopeRestructuringType');
var InstrumentScopeSeniority = require('../fields/InstrumentScopeSeniority');
var InstrumentScopePutOrCall = require('../fields/InstrumentScopePutOrCall');
var InstrumentScopeFlexibleIndicator = require('../fields/InstrumentScopeFlexibleIndicator');
var InstrumentScopeCouponRate = require('../fields/InstrumentScopeCouponRate');
var InstrumentScopeSecurityExchange = require('../fields/InstrumentScopeSecurityExchange');
var InstrumentScopeSecurityDesc = require('../fields/InstrumentScopeSecurityDesc');
var InstrumentScopeEncodedSecurityDescLen = require('../fields/InstrumentScopeEncodedSecurityDescLen');
var InstrumentScopeEncodedSecurityDesc = require('../fields/InstrumentScopeEncodedSecurityDesc');
var InstrumentScopeSettlType = require('../fields/InstrumentScopeSettlType');

function InstrumentScope (instrumentScope) {
  this.message = instrumentScope;
}
/* component */
InstrumentScope.prototype.instrumentScopeSecurityAltIdgrp = function () {
  return this.message.groups[InstrumentScopeSecurityAltIDGrp.Tag]
    .map(function (instrumentScopeSecurityAltIdgrp) {
      return new InstrumentScopeSecurityAltIDGrp(instrumentScopeSecurityAltIdgrp);
  });
};

/* field */
InstrumentScope.prototype.instrumentScopeSymbol = function () {
  return new InstrumentScopeSymbol(this.message.tags[InstrumentScopeSymbol.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSymbolSfx = function () {
  return new InstrumentScopeSymbolSfx(this.message.tags[InstrumentScopeSymbolSfx.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityId = function () {
  return new InstrumentScopeSecurityID(this.message.tags[InstrumentScopeSecurityID.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityIdsource = function () {
  return new InstrumentScopeSecurityIDSource(this.message.tags[InstrumentScopeSecurityIDSource.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeProduct = function () {
  return new InstrumentScopeProduct(this.message.tags[InstrumentScopeProduct.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeProductComplex = function () {
  return new InstrumentScopeProductComplex(this.message.tags[InstrumentScopeProductComplex.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityGroup = function () {
  return new InstrumentScopeSecurityGroup(this.message.tags[InstrumentScopeSecurityGroup.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeCficode = function () {
  return new InstrumentScopeCFICode(this.message.tags[InstrumentScopeCFICode.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityType = function () {
  return new InstrumentScopeSecurityType(this.message.tags[InstrumentScopeSecurityType.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecuritySubType = function () {
  return new InstrumentScopeSecuritySubType(this.message.tags[InstrumentScopeSecuritySubType.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeMaturityMonthYear = function () {
  return new InstrumentScopeMaturityMonthYear(this.message.tags[InstrumentScopeMaturityMonthYear.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeMaturityTime = function () {
  return new InstrumentScopeMaturityTime(this.message.tags[InstrumentScopeMaturityTime.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeRestructuringType = function () {
  return new InstrumentScopeRestructuringType(this.message.tags[InstrumentScopeRestructuringType.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSeniority = function () {
  return new InstrumentScopeSeniority(this.message.tags[InstrumentScopeSeniority.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopePutOrCall = function () {
  return new InstrumentScopePutOrCall(this.message.tags[InstrumentScopePutOrCall.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeFlexibleIndicator = function () {
  return new InstrumentScopeFlexibleIndicator(this.message.tags[InstrumentScopeFlexibleIndicator.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeCouponRate = function () {
  return new InstrumentScopeCouponRate(this.message.tags[InstrumentScopeCouponRate.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityExchange = function () {
  return new InstrumentScopeSecurityExchange(this.message.tags[InstrumentScopeSecurityExchange.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSecurityDesc = function () {
  return new InstrumentScopeSecurityDesc(this.message.tags[InstrumentScopeSecurityDesc.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeEncodedSecurityDescLen = function () {
  return new InstrumentScopeEncodedSecurityDescLen(this.message.tags[InstrumentScopeEncodedSecurityDescLen.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeEncodedSecurityDesc = function () {
  return new InstrumentScopeEncodedSecurityDesc(this.message.tags[InstrumentScopeEncodedSecurityDesc.Tag]);
};

/* field */
InstrumentScope.prototype.instrumentScopeSettlType = function () {
  return new InstrumentScopeSettlType(this.message.tags[InstrumentScopeSettlType.Tag]);
};



InstrumentScope.Tag = '1536';

module.exports = InstrumentScope;