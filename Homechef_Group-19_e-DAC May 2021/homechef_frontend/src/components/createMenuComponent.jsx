import React, { Component } from 'react'
import MenuService from '../services/MenuService'

class createMenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
    chefid: this.props.match.params.chefid,
    menuname: '',
    description: '',
    price:''

        }
        this.changeMenuNameHandler = this.changeMenuNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdatemenu = this.saveOrUpdatemenu.bind(this);
    }

    // step 3
    componentDidMount(){

    //     // step 4
        if(this.state.chefid === '_addmenu'){
            return
        }else{
            MenuService.getMenuById(this.state.chefid).then( (res) =>{
                let menu = res.data;
                this.setState({menuname: menu.menuname,
                    description: menu.description,
                    price : menu.price,
                  });
            });
        }        
    }
    saveOrUpdatemenu = (c) => {
        c.preventDefault();
        let menu = {menuname: this.state.menuname, description: this.state.description, price: this.state.price,};
        console.log('menu => ' + JSON.stringify(menu));
        

        // step 5
        if(this.state.chefid === '_addmenu'){
            MenuService.createMenu(menu)
            .then(response=> this.setState( {newChefid:response.data.chefid}))           
            // .then(res =>{
            //     this.props.history.push(`/view-chef/${this.state.newChefid}`);             
            // });     
        }else{
            // ChefService.updateChef(chef, this.state.chefid).then( res => {
            //     this.props.history.push('/chefs');
            // });
        }
    }
    
    changeMenuNameHandler= (event) => {
        this.setState({menuname: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    // changeGenderHandler= (event) => {
    //     this.setState({gender: event.target.value});
    // }


    // cancel(){
    //     this.props.history.push('/chefs');
    // }

    getTitle(){
        if(this.state.chefid === '_addmenu'){
            return <h3 className="text-center">Add Menu</h3>
        }else{
            return <h3 className="text-center">Update Menu</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Chef id: </label>
                                            <input placeholder="Chef id" name="chefid" className="form-control" 
                                                // value={this.state.menuname} onChange={this.changeMenuNameHandler}
                                                />
                                                </div>
                                        <div className = "form-group">
                                            <label> Menu Name: </label>
                                            <input placeholder="Menu Name" name="menuname" className="form-control" 
                                                 value={this.state.menuname} onChange={this.changeMenuNameHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                 value={this.state.description} onChange={this.changeDescriptionHandler}
                                                />
                                        </div>
                                         <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                 value={this.state.price} onChange={this.changePriceHandler}
                                                />
                                        </div>
                                       <button className="btn btn-success"  onClick={this.saveOrUpdatemenu}>Save</button> 
                                      {/* <button className="btn btn-danger"  onClick={this.cancel.bind} style={{marginLeft: "10px"}}>Cancel</button> */}
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default createMenuComponent;