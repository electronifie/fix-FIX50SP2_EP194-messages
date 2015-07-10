var invert = require('invert-obj');

function RiskLimitCheckRequestID (riskLimitCheckRequestId) {
  this.message = riskLimitCheckRequestId;
}

RiskLimitCheckRequestID.prototype.value = function () {
  return this.message;
};

RiskLimitCheckRequestID.Tag = '2318';

RiskLimitCheckRequestID.Type = 'STRING';

module.exports = RiskLimitCheckRequestID;