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
import deleteIcon from "../assets/icons/delete.svg";
import warningIcon from "../assets/icons/warning.svg";
import Header from '../components/Header';

const DeletePage = () => {
    return (<>
    <Container fluid className="min-vh-100 vw-100 dark-bg-color p-4 ">
        <Header
            icon={deleteIcon}
            title={"DELETE DASHBOARD"}
            text={"Item removal • Chain reorganization • Memory tracking"}
            nav={true}
            iconBg={"#432124"}
        />
        <Body/>
    </Container>
    </>)
}   

const Body = () => {
    const [email, setEmail] = useState('');

    return (<>
    <Container fluid className='p-0 my-5'>
        <Row>
            <Col xs={12} md={3} className=''>
                <Row className=" my-3 p-3 dark-panel rounded red-border" style={{background: "#432124"}}>
                    <CautionPanel/>
                </Row>

                <Row className=" my-3 p-3 dark-panel rounded red-border-panel">
                    <DeletePanel/>
                </Row>

                <Row className=" my-3 p-3 dark-panel rounded gray-border">
                    <InfoPanel/>
                </Row>
            </Col>
            <Col  className='dark-panel m-3 p-3 rounded blue-border-panel'>
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

const CautionPanel = () => {
    return (<>
        <Row className='d-flex align-items-center justify-content-start mx-0' >
            <div className='my-2 d-flex align-items-center justify-content-start text-center'> 
                <img src={warningIcon} alt="" height={25}/>
                <h5 className='mx-2  mb-0'> CAUTION </h5>
            </div>
            <p style={{fontSize: 12}}>Deletion is permanent and will reorganize the linked chain in the affected bucket.</p>
        </Row>
    </>)
}

const DeletePanel = () => {

    const [id, setId] = useState('')

    return (<>
        <div className='d-flex align-items-center justify-content-start mx-0'>
            <h4 className='mb-0'> DELETE BY ID</h4>
        </div>
        
        <div className='my-2'>
            
        <Form className='my-2'>
            <Input
                label={"ID"}
                type={"number"}
                value={id}
                setValue={setId}
                placeholder={"EC001"}
            />
        </Form>
        <Button variant="danger" className='d-flex align-items-center justify-content-center w-100 text-center'>DELETE ITEM</Button>
        </div>
    </>)
}

const InfoPanel = ({email, setEmail}) => {
    return ( <>
        <h4 className=''> STATUS </h4>
        <div className='my-0 d-flex justify-content-between'>
            <p className='dark-secondary-h'> TOTAL ITEMS </p>
            <p className='blue-font-color'> 0 </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> DELETIONS </p>
            <p className='red-font-color'> 0 </p>
        </div>
    </>)
}

export default DeletePage