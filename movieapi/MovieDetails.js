import {Card,ListGroup} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const MovieDetails = (props) => {


  return (
    <div>
<div className='container-fulid d-flex flex-row justify-content-start bg-secondary w-99 h-500'>
    <Card  style={{ width: '30rem' }}>
  <Card.Img variant="top" src={'https://services.brninfotech.com/tws/'+props.details.posters[0]} />
  <Card.Body>
    <Card.Title>{props.details.title}</Card.Title>
    <Card.Text>
      {props.details.story}
    </Card.Text>
    {/* <ListGroup variant="flush">
    <ListGroup.Item>Director: {props.details.director}</ListGroup.Item>
    <ListGroup.Item>Actors: {props.details.actors.join()}</ListGroup.Item>
    <ListGroup.Item>Industry: {props.details.industry}</ListGroup.Item>
  </ListGroup> */}
  </Card.Body>
</Card>  
</div>
</div>
    );
}

export default MovieDetails;