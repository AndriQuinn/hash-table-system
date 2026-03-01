import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Col } from 'react-bootstrap';

const Panel = ({title, value}) => {
    return (

    <Col xs={12} md={6} lg="auto"  className=' flex-grow-1 dark-panel m-2 p-3 rounded border-panel'>
        <p className='dark-secondary-h '> {title} </p>
        <p> {value} </p>
    </Col>

    )
}

export default Panel