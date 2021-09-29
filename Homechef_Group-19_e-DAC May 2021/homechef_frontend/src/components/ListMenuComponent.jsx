import React, { Component } from 'react'
import MenuService from '../services/MenuService';

class ListMenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                menu: []
        }
        this.addMenu = this.addMenu.bind(this);
        this.editMenu = this.editMenu.bind(this);
        this.deleteMenu = this.deleteMenu.bind(this);
    }

    deleteMenu(chefid){
        MenuService.deleteMenu(chefid).then( res => {
            this.setState({menu: this.state.menu.filter(menu => menu.chefid !== chefid)});
        });
    }
    viewMenu(chefid){
        this.props.history.push(`/view-menu/${chefid}`);
    }
    editMenu(chefid){
        this.props.history.push(`/add-menu/${chefid}`);
    }

    componentDidMount(){
        MenuService.getMenu().then((res) => {
            this.setState({ menu: res.data});
        });
    }

    addMenu(){
        this.props.history.push('/add-menu/_addmenu');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Menu List</h2>
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMenu}> Add Menu</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    {/* <th> Chef Id</th> */}
                                    <th> Menu Name</th>
                                    <th> Menu Description</th>
                                    <th>Menu Price</th>
                                    {/* <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.menu.map(
                                        menu => 
                                        <tr key = {menu.chefid}>
                                             <td> { menu.menuname} </td>   
                                             <td> {menu.description}</td>
                                             <td> {menu.price}</td>
                                             
                                             {/* <td>
                                                 <button onClick={ () => this.editMenu(menu.chefid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMenu(menu.chefid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMenu(menu.chefid)} className="btn btn-info">View </button>
                                             </td> */}
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

export default ListMenuComponent