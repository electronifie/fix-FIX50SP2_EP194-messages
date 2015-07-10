var invert = require('invert-obj');

function UnderlyingInterestAccrualDate (underlyingInterestAccrualDate) {
  this.message = underlyingInterestAccrualDate;
}

UnderlyingInterestAccrualDate.prototype.value = function () {
  return this.message;
};

UnderlyingInterestAccrualDate.Tag = '2042';

UnderlyingInterestAccrualDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingInterestAccrualDate;