import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddPersonPage extends React.Component {
    state = {
        person: {}
    }
    
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onAddClick = async () => {
       
        await axios.post("/api/PeopleCars/addPerson", this.state.person);       
        this.props.history.push('/'); 
    }
    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
            <div className="jumbotron">
                <h2>Add a new person</h2>
                <input type="text" className="form-control" placeholder="First Name" onChange={this.onTextChange} value={firstName} name="firstName" />
                <br/>
                <input type="text" className="form-control" placeholder="last Name" onChange={this.onTextChange} value={lastName} name="lastName" />
                <br />
                <input type="text" className="form-control" placeholder="Age" onChange={this.onTextChange} value={age} name="age" />
                <br />
                <button className="btn btn-success btn-block" onClick={this.onAddClick} > Add</button>
            </div>
            )
    }
}
export default AddPersonPage;