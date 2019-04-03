class Hello extends React.Component {


	render() {
	  return <h1>{this.props.toWhat}</h1>;
	}
}

class Note extends React.Component {

    constructor(){    
    	super();  
    	this.state = { editing: false };
    	this.renderForm  = this.renderForm.bind(this); 
    	this.renderDisplay  = this.renderDisplay.bind(this); 
    	this.edit  = this.edit.bind(this); 
    	this.save  = this.save.bind(this); 
    	this.cancel  = this.cancel.bind(this); 
    }

	edit() {
		this.setState({ editing: true });
	}

	remove() {
		alert("delete note");
	}

	save() {
		var newTextVal = this.refs.newText.value;
		this.setState({ editing: false });
	}

	cancel() {
		this.setState({ editing: false });
	}

	renderDisplay() {
		return (<div className="note">
	  	<p>{this.props.children}</p>
	  	<span>
	  		<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" value="EDIT"></button>
	  		<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" style={{marginLeft: '.5em'}} value="EDIT"></button>
	  	</span>
	  </div>);
	}

	renderForm() {
		return (<div className="note">
	  	<textarea ref="newText" style={{fontSize:'.625em'}} defaultValue={this.props.children} className="form-control"></textarea>
	  	<span>
	  		<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" value="EDIT"></button>
	  		<button onClick={this.cancel} className="btn btn-default glyphicon glyphicon-log-out" style={{marginLeft: '.5em'}} value="EDIT"></button>
	  	</span>
	  </div>);
	}

	render() {
		if (this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderDisplay();
		}
	}

}

ReactDOM.render(
	<Hello toWhat="React JSX (Note CURD)" />,
	document.getElementById('d1')
);

ReactDOM.render(
	<Note>这是一个记事本.</Note>,
	document.getElementById('d2')
);

