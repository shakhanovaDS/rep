import {ListGroup, Row, Container, Col, Nav} from 'react-bootstrap';

export default () => {
    return(
        <Container>
            <Row>
                <Col md={3}><Nav.Link href={'/profile'}>Мой профиль</Nav.Link></Col>
            </Row>
            <Row>
                <Col md={3}><Nav.Link href={'/friends'}>Друзья</Nav.Link></Col>
            </Row>
            <Row>
                <Col md={3}><Nav.Link href={'/messenger'}>Сообщения</Nav.Link></Col>
            </Row>
        </Container>
    )
}