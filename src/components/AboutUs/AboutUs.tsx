import { Button, Card } from "react-bootstrap"


const AboutUs = () => {
  return (
    <div className="d-flex justify-content-around" style={{padding:'30px'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="src/assets/images/descarga.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="src/assets/images/images (1).jpeg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="src/assets/images/images.jpeg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  
  )
}

export default AboutUs