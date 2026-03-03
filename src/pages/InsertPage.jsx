import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Row, Col, Button, Form, } from 'react-bootstrap';
import addIcon from "../assets/icons/plus.svg";
import Panel from "../components/Panel";
import Input from "../components/Input";
import thunderIcon from "../assets/icons/thunder.svg"
import graphIcon from "../assets/icons/trend.svg"
import { useState } from 'react';
import homeIcon from "../assets/icons/home.svg"
import { Link } from "react-router-dom";

const InsertPage = () => {
    return (<>
    <div className="vh-100 vw-100 container-fluid dark-bg-color p-4 ">
        <Header/>
        <Body/>
    </div>
    </>)
}   

const Header = () => {
    return ( <>
        <div className="container-fluid dark-bg-color d-flex align-items-center justify-content-between text-center">
            <div>
                <div className=' d-flex align-items-center justify-content-start text-center'> 
                    <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: "#1a3a29"}} >
                        <img src={addIcon} alt="" height={20}/>
                    </div>
                    <h1 className='mx-2 mb-0'> INSERT DASHBOARD </h1>
                </div>
                <p className="dark-secondary-h mx-5 ">Manual insertion • Automated data feeding • Real-time benchmarking </p>
            </div>
            <div>
                <Button as={Link} to='/'  className='d-flex align-items-center justify-content-center'>
                    <div className=' d-flex align-items-center justify-content-start text-center'> 
                        <img src={homeIcon} alt="" height={20}/>
                        <p className='mx-2 mb-0'> Home </p>
                    </div>
                </Button>
            </div>
        </div>
    </>)
}

const Body = () => {
    const [email, setEmail] = useState('');

    return (<>
    <Container fluid className='p-0 my-5'>
        <Row>
            <Col xs={12} md={3} className=''>
                <Row className=" my-2 p-3 dark-panel rounded green-border-panel">
                    <AutoFeedPanel/>
                </Row>

                <Row className=" my-2 p-3 dark-panel rounded green-border-panel">
                    <InputForm email={email} setEmail={setEmail}/>
                </Row>
            </Col>
            <Col  className='dark-panel m-2 p-3 rounded green-border-panel'>
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
    return (<>
        <div className='d-flex align-items-center justify-content-start mx-0'>
            <img src={thunderIcon} height={30}/>
            <h4 className='mb-0'> Auto Feed</h4>
        </div>
        
        <div className='my-2'>
            <div className='d-flex justify-content-between'>
                <p className='dark-secondary-h'> AUTOMATED INSERT</p>
                <Form>
                    <Form.Check type="switch" id="custom-switch" label=""/>
                </Form>
            </div>
            <p className='dark-secondary-h'> Inactive </p>
            <p className='dark-secondary-h my-0'> Automatically reads dataset and inserts eccomerce data </p>
        </div>
    </>)
}

const InputForm = ({email, setEmail}) => {
    return ( <>
        <h4 className=''> Manual Insert</h4>
        <Form className='my-2'>
            <Input
                label={"ID"}
                type={"number"}
                value={email}
                setValue={setEmail}
                placeholder={"EC001"}
            />
            <Input
                label={"NAME"}
                type={"text"}
                value={email}
                setValue={setEmail}
                placeholder={"Product Name"}
            />
            <Input
                label={"QUANTITY"}
                type={"number"}
                value={email}
                setValue={setEmail}
                placeholder={"100"}
            />
            <Input
                label={"LOCATION"}
                type={"text"}
                value={email}
                setValue={setEmail}
                placeholder={"A-1001"}
            />
            <Input
                label={"SUPPLIER"}
                type={"textr"}
                value={email}
                setValue={setEmail}
                placeholder={"Supplier Name"}
                />
        </Form>
        <Button variant="success" className='d-flex align-items-center justify-content-center w-100 text-center'>INSERT ITEM</Button>
    </>)
}

export default InsertPage