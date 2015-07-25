var React = require('react');

var ProfileBox = React.createClass({
	render: function() {
var comm = new Icecomm('uIWWsTBxfNGUSMwQhO2qwnF5tVizvbg3gTeFaHq5tKgvuHym');
var channelId= this.props.chatRoomId;
comm.connect('travis', {audio: true});

comm.on('connected', function(peer) {
   document.body.appendChild(peer.getVideo());
});

comm.on('local', function(peer) {
  localVideo.src = peer.stream;
});

comm.on('disconnect', function(peer) {
  document.getElementById(peer.ID).remove();
});
		return (
			<div id="profileHolder">
        <h1>Enjoy the video call</h1>
        <div id='videos'>
          <video id="localVideo" autoPlay></video>
			  </div>
      </div>
		);
	}
});

module.exports = ProfileBox;