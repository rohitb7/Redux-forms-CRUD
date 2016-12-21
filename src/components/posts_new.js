import React, { Component , PropTypes } from 'react';

import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

import { Link } from 'react-router';


class PostsNew extends Component {


	static contextTypes = {
		router : PropTypes.object
	};


	onSubmit(props){
		this.props.createPost(props)
			.then(() => {
				//blog post has been created so navigate the user to the index
				//we navigate by calling this.context.props.push with the new path to navigate to
				this.context.router.push('/');
			});
	};


	render() {
		const { fields:{ title, categories ,content }, handleSubmit } = this.props; 
		console.log(title);

			//ES 6 equivalent 
			// const handleSubmit  = this.props.handleSubmit;
			// const title  = this.props.fields.title;
			// const categories  = this.props.fields.categories;
			// const content  = this.props.fields.content;

			//handleSubmit is a redux form function 

		return(

			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }> 
			
				<h3>Create a new post</h3>
				
				<div className={`form-control-label ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" { ...title }/>
					<div className="text-help">
						{ title.touched ? title.error : " " }
					</div>
				</div>
				
				<div className={`form-control-label ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" { ...categories }/>
					<div className="text-help">
						{ categories.touched ? categories.error : " " }
					</div>
				</div>
				
				<div className={`form-control-label ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" { ...content }/>
					<div className="text-help">
						{ content.touched ? content.error : " " }
					</div>
				</div>
				
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			 </form>
		);
	}

}

function validate(values){

	const errors = {};

	if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter a category";
    }

    if (!values.content) {
        errors.content = "Enter a content";
    }

	return errors;
}

//connect 1st arg is mapStateTpProps, 2nd is mapDispatchToProps
//reduxForm 1st arg is config, 2nd is  mapStateTpProps, 3rd is mapDispatchToProps


export default reduxForm({ 
	form : 'PostNewForm', 
	fields : ['title' , 'categories' , 'content'] ,validate 
} , null, { createPost })(PostsNew);


//user types in something then this happens
/*
state = form:{
	PostNewForm:{
		title:'...user entered value',
		categories:'...user entered value',
		content:'...user entered value',
	}
}

*/