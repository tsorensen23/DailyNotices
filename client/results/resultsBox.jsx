var React = require('react');
var Results = require('./results.js');

var ResultsBox = React.createClass({

	render: function() {
    var videoArrayList = this.props.videoArray;
    if(videoArrayList.length > 0) {
    videoArrayList = videoArrayList.map(function(element,i) {
      var likesArray = [];
      var id = element.id;
      var item = "https://www.youtube.com/embed/" + id;
      if(this.props.likedVideosArray !== null && id !== null) {
        this.props.likedVideosArray.forEach(function(likedElement){
        // console.log("likedElement.videoId", likedElement.videoId);
        // console.log('id', id);
          if(likedElement.videoId === id) {
            likesArray.push(likedElement.username);
          }
        });
      } 

      return (
        <div >
          <Results setChatId={this.props.setChatId} item={item} id={id} index={i} username={this.props.username} likes={likesArray} checkLikes={this.props.checkLikes} setNextPage={this.props.setNextPage} />
        </div>
        );           
    }.bind(this));
    return <div id='ResultsBox'>{videoArrayList} </div>;
  	} else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = ResultsBox;

