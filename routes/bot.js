var play = require('../behaviours/play.js');
var Player = require('../data/models/player.js');
var bot = {

  respond: function(req, res) {
    var evt = req.param('notification_type');
    var text = req.param('text');
    var contactId = req.param('external_contact_id');
    var contactName = req.param('name');
    var messageId = req.param('id');
    var accountType = req.param('account_type');
    var source = req.param('account');

    console.log("All params ", evt, text, contactId, contactName, messageId, accountType, source);

    if (evt == 'MessageReceived') {
      reset(contactId, text)
        .then(function() {
          progress(contactId, contactName, accountType, text, messageId);
        });
    }
    res.json({ success: true });
  }
}

function reset(id, text) {
  return new Promise(function(resolve, reject) {
    if (text.toLowerCase() == "/restart") {
      Player.findOneAndRemove({contactId: id}, function(err) {
      });
      resolve(true);
    }
    else {
      resolve(true);
    }
  });
}

function progress(contactId, contactName, accountType, text, messageId) {
  play.getPlayer(contactId, contactName, accountType)
    .then(function(player) {
      play.analyze(player, { id: messageId, text: text })
        .then(function(message) {
          play.advance(player,message);
        });
    });
}

module.exports = bot;
