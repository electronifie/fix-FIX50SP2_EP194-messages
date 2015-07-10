var invert = require('invert-obj');

function MatchAttribTagID (matchAttribTagId) {
  this.message = matchAttribTagId;
}

MatchAttribTagID.prototype.value = function () {
  return this.message;
};

MatchAttribTagID.Tag = '1626';

MatchAttribTagID.Type = 'TAGNUM';

module.exports = MatchAttribTagID;