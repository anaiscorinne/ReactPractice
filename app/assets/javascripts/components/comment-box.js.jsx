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

	render(){
		return(
			<div className="comment-wrapper">
				<CommentList comments={ this.state.comments }/>
				<CommentForm />
			</div>
		)
	}
}