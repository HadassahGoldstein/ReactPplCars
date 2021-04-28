import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class DeleteCarsPage extends React.Component {
    state = {
       cars: []
    }
    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peopleCars/getCars?id=${id}`);
        this.setState({ cars: data });
      
    }
    onNoClick = async () => {       
        this.props.history.push('/');
    }
    onYesClick = async () => {
        const ids = this.state.cars.map(c => c.id);
        await axios.post("/api/PeopleCars/DeleteCars", { ids });
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <div className="row">
                </div>
                <div className="row mt-5">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>                               
                            </tr>
                        </thead>                        
                        <tbody>                            
                            {this.state.cars.map(c => {
                                return (
                                    <tr>
                                        <td>{c.make}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all the cars?</h3>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block" onClick={this.onNoClick}>No</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger btn-block" onClick={this.onYesClick}>Yes</button>
                    </div>
                </div>
            </>
        )
    }

}
export default DeleteCarsPage;