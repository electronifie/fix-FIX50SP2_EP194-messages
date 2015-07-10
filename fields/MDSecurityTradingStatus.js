var invert = require('invert-obj');

function MDSecurityTradingStatus (mdsecurityTradingStatus) {
  this.message = mdsecurityTradingStatus;
}

MDSecurityTradingStatus.prototype.value = function () {
  return this.message;
};

MDSecurityTradingStatus.Tag = '1682';

MDSecurityTradingStatus.Type = 'INT';

module.exports = MDSecurityTradingStatus;