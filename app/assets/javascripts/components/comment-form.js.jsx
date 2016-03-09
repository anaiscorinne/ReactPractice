class CommentForm extends React.Component {
	constructor(){
		super();
		this.state = {
			content: ""
		}
	}

	render(){
		return(
			<div className="comment-form">
				<form className="text-center comment-form">
					<input 
						className="comment-input" 
						type="text" 
						placeholder="Enter your comment here"
						value={this.state.content}
					/>
				</form>
			</div>
		)
	}
}