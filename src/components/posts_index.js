import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

	componentWillMount() {
		console.log('Component will mount'); // this runs only one time
		//console.log(this);
		this.props.fetchPosts();	
	}


	renderPosts(){
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id} >

					<Link to={"posts/" + post.id } >
						<span className="pull-xs-right" >{post.categories} </span> 
						<strong> {post.title} </strong>
					</Link>
					
				</li>	
				);
		})
	}
	
	//id comes from backend
//pull-xs-right not working


	render() {
		return(
			<div> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary" > 
						Add a Post
					</Link>
				</div>	
				List of Blog Posts
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			 </div>
		);
	}	

}


function mapStateToProps(state){
	return { posts : state.posts.all }; 
}


/*
function mapDispatchToProps(dispatch){ 
	return bindActionCreators( {fetchPosts }, dispatch) 
}

//export default connect(null, mapDispatchToProps)(PostsIndex);

instead of writing the above statements we can do the below i.e //{ fetchPosts : fetchPosts }
*/

export default connect(mapStateToProps, { fetchPosts : fetchPosts })(PostsIndex);



