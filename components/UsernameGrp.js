var NoUsernames = require('../fields/NoUsernames');
var Username = require('../fields/Username');

function UsernameGrp (usernameGrp) {
  this.message = usernameGrp;
}

/* group */

/* field */
UsernameGrp.prototype.username = function () {
  return new Username(this.message.tags[Username.Tag]);
};

/* end group */

UsernameGrp.Tag = '809';

module.exports = UsernameGrp;