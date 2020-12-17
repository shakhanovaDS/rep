// import {Form, Button} from 'react-bootstrap'
//
//
// export default () => {
//     function click(){
//         alert('hello')
//     }
//     return(
//         <Form>
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//
//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//
//             <Button onClick={click} variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     )
// }
import React from "react";
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'jopa'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" onChange={this.handleChange} />        </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}