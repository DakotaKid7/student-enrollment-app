import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return <Students />;
};

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrolledStudents: 87,
      addAmount1: 0,
      waitlistedStudents: 8,
      addAmount2: 0
    };
  }
  

  increment() {
    this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount1) });
    this.setState({waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmount2) });

  }

  render() {
    return (
      <div>
        <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
        <h3>Add Multiple Enrolled Students:</h3>
        <input
          type="number"
          onChange={event => this.setState({ addAmount1: event.target.value })}
          value={this.state.addAmount1}/>
        <button onClick={this.increment.bind(this)}>Increase Amount</button>


        <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
        <h3>Add Multiple Waitlisted Students:</h3>
        <input
          type="number"
          onChange={event => this.setState({ addAmount2: event.target.value })}
          value={this.state.addAmount2}/>
        <button onClick={this.increment.bind(this)}>Increase Amount</button>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));