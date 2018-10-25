import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';


class App extends Component {

state = {
  persons: [
    {id:'1',name: 'max', age: 28},
    {id:'2',name: 'idan', age: 30},
    {id:'3',name: 'or', age: 28}
  ],
  showPersons: false
}
nameChanedHandler = (event ,id) =>{
  const  personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];

  persons[personIndex] = person;
  this.setState({ persons: persons })
}
deletePersonHandler = (personIndex) => {
//const  persons = this.state.persons.slice();
const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons: persons});
}
togglePersonsHandler = () =>
{
  this.setState({showPersons: !this.state.showPersons});
}
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
     
    };

      let persons=null;
      if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChanedHandler(event,person.id)}/>
            })}
         </div>
        );
        style.backgroundColor = 'red';
      
      }
      let classes =[] //['red', 'bold'].join(' ');
      if (this.state.persons.length <= 2){
        classes.push('red');
      }
      if(this.state.persons.length <=1){
        classes.push('bold');
      }
    return (
      
      <div className="App">
       <h1>Hi I'm a App</h1>       
       <p className={classes.join(' ')}> Ravendb is the best</p>
       <button
       style={style}
       onClick={ this.togglePersonsHandler}>Hide Names</button>
      {persons}
       </div>
      
    );
  }
}

export default App;
