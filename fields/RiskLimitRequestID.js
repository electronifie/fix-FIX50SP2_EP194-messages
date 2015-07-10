var invert = require('invert-obj');

function RiskLimitRequestID (riskLimitRequestId) {
  this.message = riskLimitRequestId;
}

RiskLimitRequestID.prototype.value = function () {
  return this.message;
};

RiskLimitRequestID.Tag = '1666';

RiskLimitRequestID.Type = 'STRING';

module.exports = RiskLimitRequestID;