var React = require('react');
var Promise = require('bluebird');

var Results = React.createClass({
  handleClick: function() {
    var IceSomebody=confirm("want to chat with other people who like this video?");
    console.log(IceSomebody);

    var likeObject = {
      username: this.props.username,
      videoId: this.props.id 
    };
    if(likeObject.username !== null) {
      $.ajax({
          type: 'POST',
          contentType: 'application/json',
          url: '/likes',
          data: JSON.stringify(likeObject),
          success:function(data) {
            //bind this and remove self references
            console.log("successfully posted likes to db", data);
            // this.props.checkLikes(data);
            // this.props.setChatRoom(this.props.id);
            if(IceSomebody) {
              this.props.setNextPage('profile');
            }
          }.bind(this)
        });
    }
  },

  render: function() {
    console.log("likes", this.props.likes);
    var likes = this.props.likes.map(function(element) {
      var name = element + " ";
      return (<div> {name} </div>);
    });
    return (
      <div>
        <div id='likeBox'>
          <div id='clickDiv' onClick={this.handleClick}>Click Me!</div>
        </div>
        <iframe width="560" height="315" src={this.props.item} frameborder="0" allowfullscreen></iframe>
        <div id='wholiked'>
          <p>{likes}</p>
        </div>
      </div>);
  }
});

module.exports = Results;

