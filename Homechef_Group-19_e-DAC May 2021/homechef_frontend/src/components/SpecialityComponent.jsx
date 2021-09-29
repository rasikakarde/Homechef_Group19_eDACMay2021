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
import SpecialityService from '../services/SpecialityService';
import HeaderComponent from '../components/HeaderComponent';



//import { Button } from './Button';
//import backgrdVdo from './videos/video-1.mp4';
import backimage from './images/homechef.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
const HOST = "http://localhost:8080";



class SpecialityComponent extends Component{
  constructor(props) {
      super(props)

    this.state = {
        specialities: [],errmsg:''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    SpecialityService.viewSpeciality().then((res) => {
      this.setState({specialities: res.data });
    })
    .catch(error=>{console.log(error)
      this.setState({errmsg:"Something went wrong"})
    });
  }
  
  render() {
    return (
      <>
          
        <>
        
        <div class="bg_image"
                style={{
                  backgroundImage: 'url('+backimage+')',
                  backgroundSize: "cover",
                  backgroundPosition: 'absolute',
                  backgroundRepeat: 'no-repeat',
                  
                  color: "#f5f5f5"
                }}>

    
        <div className='container fluid'>
        <div className="row">
          
                <h1>Our Specialities</h1>

                {
                    
                    this.state.specialities.map(speciality=>
                        <div className="card m-2" 
                        style={{width:'250px'}} 
                        key={speciality.cuisineid}>
                              <div className="card-body">
                              {speciality.title}
                              <Card className="cardClass" >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          className="cardClass"
                          height="140"
                          image={`${HOST}${speciality.spceialityimagename}`}
                          title="Speciality Details"
                          key={speciality.cuisineid}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {speciality.cuisinetype}
                          </Typography>
                          
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                       
                    
                      </CardActions>
                    </Card>
                    </div>
                  </div>
                  )
                }
              </div>

              </div>    
              </div>
             
                {this.state.errmsg}
            </>
   
      </>
    );
  };

  

}


// function MainSection() {
//   return (
//     <div className='hero-container'>
//       <video autoPlay loop muted><source src={backgrdVdo}/></video>
//       <h2>HOME COOK FOOD AWAITS</h2>
//       <p>What are you waiting for?</p>
//       <div className='hero-btns'>
//         <Button className='btns' buttonStyle='btn--outline'
//           buttonSize='btn--large'>GET STARTED</Button>
//         <Button className='btns' buttonStyle='btn--primary'
//           buttonSize='btn--large'>BOOK CHEF<i className='far fa-play-circle'/></Button>
//       </div>
//     </div>
//   )
// }

// function MainSection() {
//   return (
//     <div class="bg_image"
//     style={{
//       backgroundImage: 'url('+backimage+')',
//       backgroundSize: "cover",
//       height: "100vh",
//       color: "#f5f5f5"
//     }}>
     
//     </div>
//   )
// }



export default SpecialityComponent