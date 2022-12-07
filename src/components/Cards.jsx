import Card from 'react-bootstrap/Card';

const Cards = (Props) => {
    return (
        <Card style={{ width: "20rem" }}>
            <Card.Img src={Props.img}/>
            <Card.Body>
                <Card.Title>{Props.name} </Card.Title>
                <Card.Text>{Props.texto} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards