
import Card from 'react-bootstrap/Card';

function Cardcomponent1() {
  return (
    <Card style={{ width: '18rem' }} className="space" >
      
      <Card.Body>
        <Card.Title>Group Discussion Session</Card.Title>
        <Card.Text className="align_justify" >
        <li>
       Our Group Discussion Session would help in the development of confidence  of person apart from this it also prepare him for gd round 
       conducted during hiring</li>
       <li>Price: X rupees</li>
       <li>Shedule: 8 days a month</li>
       
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Cardcomponent1;