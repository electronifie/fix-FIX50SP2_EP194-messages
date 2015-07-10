var DerivativeInstrument = require('../components/DerivativeInstrument');
var DerivativeInstrumentAttribute = require('../components/DerivativeInstrumentAttribute');
var MarketSegmentGrp = require('../components/MarketSegmentGrp');
var SecurityClassificationGrp = require('../components/SecurityClassificationGrp');

function DerivativeSecurityDefinition (derivativeSecurityDefinition) {
  this.message = derivativeSecurityDefinition;
}
/* component */
DerivativeSecurityDefinition.prototype.derivativeInstrument = function () {
  return this.message.groups[DerivativeInstrument.Tag]
    .map(function (derivativeInstrument) {
      return new DerivativeInstrument(derivativeInstrument);
  });
};

/* component */
DerivativeSecurityDefinition.prototype.derivativeInstrumentAttribute = function () {
  return this.message.groups[DerivativeInstrumentAttribute.Tag]
    .map(function (derivativeInstrumentAttribute) {
      return new DerivativeInstrumentAttribute(derivativeInstrumentAttribute);
  });
};

/* component */
DerivativeSecurityDefinition.prototype.marketSegmentGrp = function () {
  return this.message.groups[MarketSegmentGrp.Tag]
    .map(function (marketSegmentGrp) {
      return new MarketSegmentGrp(marketSegmentGrp);
  });
};

/* component */
DerivativeSecurityDefinition.prototype.securityClassificationGrp = function () {
  return this.message.groups[SecurityClassificationGrp.Tag]
    .map(function (securityClassificationGrp) {
      return new SecurityClassificationGrp(securityClassificationGrp);
  });
};



DerivativeSecurityDefinition.Tag = '1214';

module.exports = DerivativeSecurityDefinition;