import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Col } from 'react-bootstrap';

const Panel = ({title, value,className}) => {
    return (

        <Col  className={`dark-panel m-2 p-3 rounded ${className}`}>
            <p className='dark-secondary-h '> {title} </p>
            <p> {value} </p>
        </Col>

    )
}

export default Panel