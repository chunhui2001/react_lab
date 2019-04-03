class Hello extends React.Component {


	render() {
	  return <h1>{this.props.toWhat}</h1>;
	}
}

class Note extends React.Component {
	
	edit() {
		alert("editing note");
	}

	remove() {
		alert("delete note");
	}

	render() {
	  return <div className="note">
	  	<p>{this.props.children}</p>
	  	<span>
	  		<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" value="EDIT"></button>
	  		<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" style={{marginLeft: '.5em'}} value="EDIT"></button>
	  	</span>
	  </div>;
	}
}

ReactDOM.render(
	<Hello toWhat="React JSX (Note)" />,
	document.getElementById('d1')
);



ReactDOM.render(
	<Note>这是一个记事本.</Note>,
	document.getElementById('d2')
);

