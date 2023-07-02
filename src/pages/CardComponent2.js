
import Card from 'react-bootstrap/Card';

function CardComponent2() {
  return (
    <Card style={{ width: '18rem' }} className="space">
      
      <Card.Body>
        <Card.Title>Knowledge Share</Card.Title>
        <Card.Text className="align_justify" >
        <li>
       Our Knowledge Share will help the people to communicate with other  person and share their knowledge through the video call meet organized by our side </li>
       <li>Price: X rupees</li>
       <li>Shedule: 4 days a month</li>
       
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default CardComponent2;