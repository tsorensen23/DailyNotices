var React = require('react');
var Results = require('./results.js');

var ResultsBox = React.createClass({

	render: function() {
    var videoArrayList = this.props.videoArray;
    if(videoArrayList.length > 0) {
    videoArrayList = videoArrayList.map(function(element,i) {
    var likesArray = [];
    
      var id = element.id.videoId;
      var item = "https://www.youtube.com/embed/" + id;
      console.log("id", id);
      console.log("likedVideosArray", this.props.likedVideosArray)
      if(this.props.likedVideosArray !== null && id !== null) {
        this.props.likedVideosArray.forEach(function(likedElement){
        // console.log("likedElement.videoId", likedElement.videoId);
        // console.log('id', id);
          if(likedElement.videoId === id) {
            likesArray.push(likedElement.username);
          }
        });
      } 
      console.log("this is the likesArray", likesArray);

      return (
        <div >
          <Results item={item} id={id} index={i} username={this.props.username} likes={likesArray} checkLikes={this.props.checkLikes} setNextPage={this.props.setNextPage} />
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

