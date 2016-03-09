class Printer extends React.Component {
	constructor(){
		super();
		this.state = {
			content: "This is a React component",
			name: "Josh"
		}
	}

	updateContent(event){
		this.setState( { content: event.target.value } )
	}

	render(){
		return(
			<div>
				<h1>{ this.state.content }</h1>
				<h5>{ this.state.name }</h5>
				<input 
					type="text"
					value={this.state.content}
					onChange={this.updateContent.bind(this)}
				/>
			</div>
		)
	}
}