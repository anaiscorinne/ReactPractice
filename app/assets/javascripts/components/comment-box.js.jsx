class CommentBox extends React.Component {

	constructor(){
		super();
		this.state = {
			comments: [
			{user: "anais@ana.com", content: "This is my first post"},
			{user: "faraz@ana.com", content: "What"},
			{user: "josh@ana.com", content: "Yes"}
			]
		}
	}

	addComment(userInput){
		//Ajax to my rails API
		var comment = { user:"Anonymous", content: userInput}
		var comments = this.state.comments 
		comments.push(comment);
		this.setState({ comments: comments })
	}

	render(){
		return(
			<div className="comment-wrapper">
				<CommentList comments={ this.state.comments }/>
				<CommentForm onCommentAdd={this.addComment.bind(this)}/>
			</div>
		)
	}
}