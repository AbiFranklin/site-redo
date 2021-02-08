import { Jumbotron } from 'reactstrap';
import './Hero.css'


    
    const Hero = (props) => {
  
    return (
      <Jumbotron className="Hero">
        <h1>Technology is best when</h1>
        <h1>it brings people together.</h1>
        <h2>-Matt Mullenweg</h2>
      </Jumbotron>
    );
  }
  
  export default Hero;