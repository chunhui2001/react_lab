
class Hello extends React.Component {
	render() {
	  return <h1>{this.props.toWhat}</h1>;
	}
}

class Checkbox extends React.Component {
	
    constructor(){    
    	super();   // 这句也很重要,这样才能在里面继承this
    	this.state = { checked: true };
    	this.handleCheck  = this.handleCheck.bind(this); // 这句是关键,没 有加就会报 handleCheck undefined
    }
	
	handleCheck() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		var msg = this.state.checked ? 'checked' : 'not checked' ;
		return <div>
			<input type="checkbox" id="cbx" defaultChecked={this.state.checked} onChange={this.handleCheck} />
			<label for="cbx">{msg}</label>
		</div>;
	}
}

ReactDOM.render(
	<Hello toWhat="React Checkbox" />,
	document.getElementById('d1')
);



ReactDOM.render(
	<Checkbox>这是一个Checkbox.</Checkbox>,
	document.getElementById('d2')
);

