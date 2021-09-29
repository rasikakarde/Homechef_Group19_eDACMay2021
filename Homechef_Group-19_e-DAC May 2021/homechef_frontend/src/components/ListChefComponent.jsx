import React, { Component } from 'react'
import ChefService from '../services/ChefService'

class ListChefComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                chefs: []
        }
        this.addChef = this.addChef.bind(this);
        this.editChef = this.editChef.bind(this);
        this.deleteChef = this.deleteChef.bind(this);
    }

    deleteChef(chefid){
        ChefService.deleteChef(chefid).then( res => {
            this.setState({chefs: this.state.chefs.filter(chef => chef.chefid !== chefid)});
        });
    }
    viewChef(chefid){
        this.props.history.push(`/view-chef/${chefid}`);
    }
    editChef(chefid){
        this.props.history.push(`/add-chef/${chefid}`);
    }

    componentDidMount(){
        ChefService.getChefs().then((res) => {
            this.setState({ chefs: res.data});
        });
    }

    addChef(){
        this.props.history.push('/add-chef/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Chef List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addChef}> Add Chef</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Chef First Name</th>
                                    <th> Chef Last Name</th>
                                    <th> Chef Email Id</th>
                                    <th> Chef Address</th>
                                    <th> Chef City</th>                                   
                                    <th> Chef Contact Number</th>                                
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.chefs.map(
                                        chef => 
                                        <tr key = {chef.chefid}>
                                             <td> { chef.firstname} </td>   
                                             <td> {chef.lastname}</td>
                                             <td> {chef.emailid}</td>
                                             <td> {chef.address}</td>
                                             <td> {chef.city}</td>                                             
                                             <td> {chef.contactnumber}</td>
                                             <td>
                                                 <button onClick={ () => this.editChef(chef.chefid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteChef(chef.chefid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewChef(chef.chefid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListChefComponent