import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCarsPage extends React.Component {
    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''

        },
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
        
    }
    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecars/getById?id=${id}`);       
        this.setState({ person: data ,  car: { personId: id } });
        
    }
    onClick = async () => {              
        console.log(this.state.car);
        console.log(this.state.person);
        await axios.post("/api/PeopleCars/addCar", this.state.car);
        this.props.history.push('/'); 
    }
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }
    render() {
        const { firstName, lastName } = this.state.person;
        const { make, model, year } = this.state.car;
        return (
            <div className="jumbotron">
                <h2>Add a new car for {firstName} {lastName}</h2>
                <input type="text" placeholder="Make" value={make} name="make" className="form-control" onChange={this.onTextChange} />
                <br />
                <input type="text" placeholder="Model" value={model} name="model" className="form-control" onChange={this.onTextChange} />
                <br />
                <input type="text" placeholder="Year" value={year} name="year" className=" form-control" onChange={this.onTextChange} />
                <br />
                <button className="btn btn-block btn-primary" onClick={this.onClick} >Submit</button>
            </div>
            )
    }
}
export default AddCarsPage;