
import './App.css';
import { Button,Alert,Card,ListGroup,ListGroupItem} from 'react-bootstrap';

function Movie() {
  return (
    <div>
      <Alert variant="primary">
       This is a hi alert—check it out!
      </Alert>
      <div>
    
       <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>

      </div>
      <div className="movie">

            <Card className="movieposter" >
        <Card.Img variant="top" src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/PawanKalyanStillBheemlaNayak_1200_FilePhoto.jpg?itok=f8He_mEC" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
           <ListGroupItem>Vestibulum at eros</ListGroupItem>
         </ListGroup>
      <Card.Body>
       <Card.Link href="#">Card Link</Card.Link>
           <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
       </Card>

       <Card className="movieposter">
  <Card.Img variant="top" src="https://images.indianexpress.com/2021/07/Mahesh-Babu-1200.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

      </div>

    </div>
    
  );
}

// const Book =() =>{
//   return <article>hi</article>
// }
export default Movie;
