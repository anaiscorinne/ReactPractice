class HelloWorld extends React.Component {
	render(){
		return(
			<div>
				<h1>Hello {this.props.name}!</h1>
				{ "H" + "E" + "Y" }<br />
				<img src="something" />
			</div>
		)
	}
}