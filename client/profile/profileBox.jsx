var React = require('react');

var ProfileBox = React.createClass({
	render: function() {
var comm = new Icecomm('uIWWsTBxfNGUSMwQhO2qwnF5tVizvbg3gTeFaHq5tKgvuHym');

comm.connect('Travis', {audio: false});

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
				<h1>Here are all the other geeks who like that lame video...</h1>
        <video id="localVideo" autoPlay></video>
			
      </div>
		);
	}
});

module.exports = ProfileBox;