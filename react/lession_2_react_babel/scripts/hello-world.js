class Hello extends React.Component {
	render() {
	  return <div>Hello {this.props.toWhat}</div>;
	}
}

ReactDOM.render(
	<Hello toWhat="World1..." />,
	document.getElementById('d1')
);


ReactDOM.render(
	<Hello toWhat="World2..." />,
	document.getElementById('d2')
);


ReactDOM.render(
	<div><Hello toWhat="World3...">World3 PlaceHolder</Hello>
	<Hello toWhat="World4..." />
	<Hello toWhat="World5..." /></div>,
	document.getElementById('d3')
);