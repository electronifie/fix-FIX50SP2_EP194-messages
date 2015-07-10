var invert = require('invert-obj');

function Seniority (seniority) {
  this.message = seniority;
}

Seniority.prototype.value = function () {
  return this.message;
};


Seniority.Keys = {
  SENIOR_SECURED: 'SD',
  SENIOR: 'SR',
  SUBORDINATED: 'SB',
};

Seniority.Tag = '1450';

Seniority.Type = 'STRING';

Seniority.Values = invert(Seniority.Keys);

module.exports = Seniority;