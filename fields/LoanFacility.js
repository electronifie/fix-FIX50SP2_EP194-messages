var invert = require('invert-obj');

function LoanFacility (loanFacility) {
  this.message = loanFacility;
}

LoanFacility.prototype.value = function () {
  return this.message;
};


LoanFacility.Keys = {
  'BRIDGE_LOAN': '0',
  'LETTER_OF_CREDIT': '1',
  'REVOLVING_LOAN': '2',
  'SWINGLINE_FUNDING': '3',
  'TERM_LOAN': '4',
  'TRADE_CLAIM': '5',
};

LoanFacility.Tag = '1955';

LoanFacility.Type = 'INT';

LoanFacility.Values = invert(LoanFacility.Keys);

module.exports = LoanFacility;