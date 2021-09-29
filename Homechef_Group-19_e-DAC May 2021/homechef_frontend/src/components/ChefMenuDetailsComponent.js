import React, { Component } from 'react'
import ChefService from '../services/ChefService'


class ChefMenuDetailsComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            chefid: this.props.match.params.chefid,
            chefs: []
        }
    }
    componentDidMount(){
        ChefService.getAllChefDetailsById(this.state.chefid).then( res => {
            this.setState({chefs: res.data});
        })
    }

    render(){
        return(

            <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Menu</th>
                                    <th> Description</th>
                                    <th> Price</th>                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.chefs.map(
                                        chef => 
                                        <tr>
                                             <td> {chef.chefMenuName} </td>   
                                             <td> {chef.chefDescription}</td>
                                             <td> {chef.chefPrice}</td>                                        
                                             
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
        )



    }


}
export default ChefMenuDetailsComponent