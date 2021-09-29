import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';
import ChefService from '../services/ChefService';
import './Menu.css';
import '../App.css';
//import { Button } from './Button';
import backgrdVdo from './videos/video5.mp4';
import axios from 'axios';

import {
  Card as CardFoodItem, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button as ButtonFood, Row, Col} from 'reactstrap';
import dhokla from './images/dhokla.jpg';
import vadapav from './images/vada-pav.jpg';
import idali from './images/Idali.jpg';
import samosa from './images/samosa.jpg';
import pavbhaji from './images/pav-bhaji.jfif';
import paratha from './images/paratha.jfif';
import misalpav from './images/Misal-Pav.jpg';
import cake from './images/cake.jpg';
import { Link } from 'react-router-dom';
const HOST = "http://localhost:8080";


class AllChefComponent extends Component{
  constructor(props) {
      super(props)

    this.state = {
      chefs: [],errmsg:''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    ChefService.getChefs().then((res) => {
      this.setState({ chefs: res.data });
    })
    .catch(error=>{console.log(error)
      this.setState({errmsg:"Something went wrong"})
    });
  }
  getAllChefDetailsById(chefid){
    //ChefService.getAllChefDetailsById(chefid)
    this.props.history.push('/chefMenu/'+ chefid);
  }
  viewChef(chefid){
    this.props.history.push(`/view-chef/${chefid}`);
}

  render() {
    return (
      <>
      <div>
        <MainSection />
        <CardFood/>
        <>
        <h1  style={{ color: 'black' , textAlign:'center'}}>Our Home Chefs...</h1>
                <div className="row" id="ourChefs">
                {
                    this.state.chefs.map(chef=>
                        <div className="card m-2" 
                        style={{width:'250px'}} 
                        key={chef.chefid}>
                              <div className="card-body">
                              {chef.title}
                              <Card className="cardClass" >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          className="cardClass"
                          height="140"
                          image={`${HOST}${chef.chefimagename}`}
                          title="Chef Details"
                          key={chef.chefid}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {chef.firstname}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {chef.lastname}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" onClick={ () => this.getAllChefDetailsById(chef.chefid)}>
                          View Menu
                        </Button>
                        <Button size="small" color="primary" onClick={ () => this.viewChef(chef.chefid)}>
                          View Contact
                        </Button>
                      </CardActions>
                    
                    </Card>
                    </div>
                  </div>
                  )
                }
              </div>
                {this.state.errmsg}
            </>
            </div>
      </>
    );
  };
}

function MainSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted><source src={backgrdVdo} type='video/mp4'/></video>
      <div className='topGap'>
      <div><h1 style={{ color: 'white', fontSize:'75px', fontFamily:'serif'}}>Happiness Is HomeMade</h1></div>
      {/* <div><h1 style={{ color: 'white', fontSize:'75px', fontFamily:'serif'}}>HomeMade</h1></div> */}
      <div className='hero-btns' style={{textAlign:'center'}}>
        <Button className='btn' buttonStyle='btn--outline'
          buttonSize='btn--large' href='#ourChefs'>GET STARTED</Button>
        <Link to="/speciality" className='btn' buttonStyle='btn--primary'
          buttonSize='btn--large'>CHEF SPECIAL</Link>
      </div>
      <div className='hero-btns row justify-content-center' style={{marginTop:'50px'}}>
      <input
          type="text"
          id="header-search"
          placeholder="Enter Your City Here"
          style={{width:'450px', height:'40px'}}
          className='form-control' 
      />
      <button type="submit" buttonStyle='btn--primary' style={{marginLeft: '10px',width:'5rem', color: '#fff', backgroundColor:'orange'}}
        className='form-control'  buttonSize='btn-sm'>Search</button>
      </div>
      </div>
    </div>
  )
}

function CardFood(){
  return(
    <div className='gap'>
      
      <h1  style={{ color: 'black' , textAlign:'center'}}>Some Of Our Delicious Menus Are</h1>
      
    <Row id='foodMenu'>

    <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={cake} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Cake</CardTitle>
          <CardText>Spongy and Yummy Red Velvet Cake</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>
     

      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={vadapav} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Vada Pav</CardTitle>
          <CardText>Special Mumbai Style Homemade Vadapav</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>

      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={idali} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Idli</CardTitle>
          <CardText>Mouth Watering South Indian Special Idli</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>
      
      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={samosa} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Samosa</CardTitle>
          <CardText>Yummy and Spicy Homemade Samosa</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>
    </Row>
    <br/>
    <Row id='foodMenu1'>
    <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={dhokla} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Dhokla</CardTitle>
          <CardText>Homemade Delicious Gujrati Dhokla</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>

      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={pavbhaji} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Pav Bhaji</CardTitle>
          <CardText>Yummy and Spicy Homemade Pav Bhaji</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>

      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={paratha} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Paratha</CardTitle>
          <CardText>Soft and Buttery Special Aaloo Paratha</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>

      <Col sm="3">
      <CardFoodItem>
        <CardImg top width="100%" height="180px" src={misalpav} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Misal Pav</CardTitle>
          <CardText>Nashik Special Spicy and Tasty Misal Pav</CardText>
        </CardBody>
      </CardFoodItem>
      </Col>
      
      
    </Row>
    </div>
  )
}

export default AllChefComponent

