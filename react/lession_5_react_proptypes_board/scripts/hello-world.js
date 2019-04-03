

class Hello extends React.Component {
	render() {
	  return (<h1>{this.props.toWhat}</h1>);
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
    	this.remove  = this.remove.bind(this); 
    }

    componentWillMount() {
    	
    	this.style = {
    		right: this.randomBetween(0, window.innerWidth - 150) + 'px',
    		top: this.randomBetween(0, window.innerHeight - 150) + 'px',
    		transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
    	}

    }

    randomBetween(min, max) {
    	return (min + Math.ceil(Math.random() * max));
    }

	edit() {
		this.setState({ editing: true });
	}

	remove() {
		this.props.onRemove(this.props.index);
	}

	save() {
		var newTextVal = this.refs.newText.value;
		this.props.onChange(newTextVal, this.props.index);
		this.setState({ editing: false });
	}

	cancel() {
		this.setState({ editing: false });
	}

	renderDisplay() {
		return (<div draggable="true" className="note" style={this.style}>
	  	<p>{this.props.children + "_" + this.props.id}</p>
	  	<span>
	  		<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" value="EDIT"></button>
	  		<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" style={{marginLeft: '.5em'}} value="EDIT"></button>
	  	</span>
	  </div>);
	}

	renderForm() {
		return (<div className="note" style={this.style}>
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

class Borad extends React.Component {

	
    constructor(){    

    	super();  
    	// state
    	this.state = { notes: ['Mike', 'Keesh Zhang', 'Email Lisa'] };
    	// bind
    	this.update  = this.update.bind(this); 
    	this.eachNote  = this.eachNote.bind(this); 
    	this.remove  = this.remove.bind(this); 
    	this.newNote  = this.newNote.bind(this); 
    
    }


    componentWillMount() {

    	var self = this;
    	
    	if (self.props.count) {
    		$.getJSON('https://baconipsum.com/api/?type=all-meat&sentences=' + self.props.count + '&start-with-lorem=1&callback', function(result) {
	    		var sentenceArr = result[0].split('. ');
	    		sentenceArr.forEach((word) => {
	    			self.newNote(word.substring(0,30));
	    		});
	    	});
    	}
    	

    }

    update(newText, i) {
    	var arr = this.state.notes;
    	arr[i] = newText;
    	this.setState({ notes : arr });
    }

    remove(i) {
    	var arr = this.state.notes;
    	//arr.splice(i, 1);
    	arr[i] = null;
    	this.setState({ notes : arr });
    }

    newNote(text) {
    	var arr = this.state.notes;
    	arr.push(text ? text : 'new Note')
    	this.setState({ notes : arr });
    }

    eachNote(note, i) {
    	if (note) {
    		return (<Note id={i} index={i} onChange={this.update} onRemove={this.remove}>{note}</Note>);
    	}
    	
    }

	render() {
		return (<div className="board">
			{ this.state.notes.map(this.eachNote) }
			<button onClick={this.newNote} className="btn btn-sm glyphicon glyphicon-plus" />
		</div>);
	}

}

ReactDOM.render(
	<Hello toWhat="React PropTypes" />,
	document.getElementById('d1')
);

ReactDOM.render(
	<Borad count={3}></Borad>,
	document.getElementById('d2')
);

