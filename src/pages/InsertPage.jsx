import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Row, Col, Button, Form, } from 'react-bootstrap';
import addIcon from "../assets/icons/plus.svg";
import Input from "../components/Input";
import thunderIcon from "../assets/icons/thunder.svg"
import graphIcon from "../assets/icons/trend.svg"
import pauseIcon from "../assets/icons/pause.svg"
import playIcon from "../assets/icons/play.svg"
import { useState } from 'react';
import Header from '../components/Header';

const InsertPage = () => {

    const [id,setId] = useState('')
    const [prodName,setProdName] = useState('')
    const [quantity,setQuantity] = useState('')
    const [location,setLocation] = useState('')
    const [supplier,setSupplier] = useState('')

    return (<>
    <Container fluid className="min-vh-100 vw-100 dark-bg-color p-4 ">
        <Header
            icon={addIcon}
            title={"INSERT DASHBOARD"}
            text={"Manual insertion • Automated data feeding • Real-time benchmarking"}
            iconBg={"#1a3a29"}
            nav={true}
        />
        <Body
            id={id}
            setId={setId}
            prodName={prodName}
            setProdName={setProdName}
            quantity={quantity}
            setQuantity={setQuantity}
            location={location}
            setLocation={setLocation}
            supplier={supplier}
            setSupplier={setSupplier}
        />
    </Container >
    </>)
}   

const Body = ({
    id,setId,prodName,setProdName,quantity,setQuantity,location,setLocation,supplier,setSupplier
}) => {
    const [email, setEmail] = useState('');

    return (<>
    <Container fluid className='p-0 my-0'>
        <Row>
            <Col xs={12} md={3} className=''>
                <Row className=" my-3 p-3 dark-panel rounded green-border-panel">
                    <AutoFeedPanel/>
                </Row>

                <Row className=" my-3 p-3 dark-panel rounded green-border-panel">
                    <InputForm 
                        id={id}
                        setId={setId}
                        prodName={prodName}
                        setProdName={setProdName}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        location={location}
                        setLocation={setLocation}
                        supplier={supplier}
                        setSupplier={setSupplier}
                    />
                </Row>
            </Col>
            <Col  className='dark-panel m-3 p-3 rounded green-border-panel'>
                <div className='d-flex align-items-center justify-content-start mx-0'>
                    <img src={graphIcon} height={30}/>
                    <h4 className=' mx-2 mb-0'> Graph </h4>
                </div>
                <div>
                    <p> No data yet </p>
                </div>
            </Col>
        </Row>
    </Container>
    </>)
}

const AutoFeedPanel = () => {

    const [isOn, setIsOn] = useState(false);

    const handleSwitch = (e) => {
        setIsOn(e.target.checked);
        console.log("Switch is now:", isOn);
        
    };

    return (<>
        <div className='d-flex align-items-center justify-content-start mx-0'>
            <img className='me-0' src={thunderIcon} height={30}/>
            <h4 className='mb-0 mx-0'> Auto Feed</h4>
        </div>
        
        <div className='my-2'>
            <div className='d-flex justify-content-between'>
                <p className='dark-secondary-h'> AUTOMATED INSERT</p>
                <Form>
                    <Form.Check 
                        type="switch" 
                        id="custom-switch" 
                        label=""
                        checked={isOn}
                        onChange={handleSwitch}
                        className='custom-switch'
                    />
                </Form>
            </div>
            {isOn ? 
            <p className='green-font-color d-flex align-items-center justify-content-start'><img className='me-2' src={playIcon} height={15}/>Active • Reading the dataset... </p>
            : <p className='dark-secondary-h d-flex align-items-center justify-content-start'> <img className='me-2' src={pauseIcon} height={15}/> Inactive </p>}
            
            <p className='dark-secondary-h my-0'> Automatically reads dataset and inserts eccomerce data </p>
        </div>
    </>)
}

const InputForm = ({
    id,setId,prodName,setProdName,quantity,setQuantity,location,setLocation,supplier,setSupplier
}) => {
    return ( <>
        <h4 className=''> Manual Insert</h4>
        <Form className='my-2'>
            <Input
                label={"ID"}
                type={"text"}
                value={id}
                setValue={setId}
                placeholder={"EC001"}
            />
            <Input
                label={"NAME"}
                type={"text"}
                value={prodName}
                setValue={setProdName}
                placeholder={"Product Name"}
            />
            <Input
                label={"QUANTITY"}
                type={"text"}
                value={quantity}
                setValue={setQuantity}
                placeholder={"100"}
            />
            <Input
                label={"LOCATION"}
                type={"text"}
                value={location}
                setValue={setLocation}
                placeholder={"A-1001"}
            />
            <Input
                label={"SUPPLIER"}
                type={"text"}
                value={supplier}
                setValue={setSupplier}
                placeholder={"Supplier Name"}
                />
        </Form>
        <Button variant="success" className='d-flex align-items-center justify-content-center w-100 text-center'>INSERT ITEM</Button>
    </>)
}

export default InsertPage