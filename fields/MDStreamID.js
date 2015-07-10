var invert = require('invert-obj');

function MDStreamID (mdstreamId) {
  this.message = mdstreamId;
}

MDStreamID.prototype.value = function () {
  return this.message;
};

MDStreamID.Tag = '1500';

MDStreamID.Type = 'STRING';

module.exports = MDStreamID;