import Form from 'react-bootstrap/Button';
import './Welcome.css'

function Welcome() {

    return (
        <>
            <div className="container">
                <h1>Covid Office App</h1>
                <p>In deze app kun je een kantoorplek reserveren</p>
                <p>Selecteer je naam:</p>

            </div>
            <Form.Group>
                <Form.Control as="select" size="lg">
                    <option>Large select</option>
                    <option>Hallo</option>
                </Form.Control>
            </Form.Group>
        </>
    )


}

export default Welcome;