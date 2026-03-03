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
import searchIcon from "../assets/icons/search.svg";

const SearchPage = () => {
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
                    <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: "#1f2d47"}} >
                        <img src={searchIcon} alt="" height={20}/>
                    </div>
                    <h1 className='mx-2 mb-0'> SEARCH DASHBOARD </h1>
                </div>
                <p className="dark-secondary-h mx-5 ">Hash-based lookup • Comparison tracking • Performance metrics </p>
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
                <Row className=" my-2 p-3 dark-panel rounded blue-border-panel">
                    <SearchPanel/>
                </Row>

                <Row className=" my-2 p-3 dark-panel rounded blue-border">
                    <InfoResult/>
                </Row>
            </Col>
            <Col  className='dark-panel m-2 p-3 rounded blue-border-panel'>
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

const SearchPanel = () => {

    const [id, setId] = useState('')

    return (<>
        <div className='d-flex align-items-center justify-content-start mx-0'>
            <h4 className='mb-0'> SEARCH BY ID</h4>
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
        <Button variant="primary" className='d-flex align-items-center justify-content-center w-100 text-center'>SEARCH ITEM</Button>
        </div>
    </>)
}

const InfoResult = ({email, setEmail}) => {
    return ( <>
        
        <h4 className='blue-font-color'> ITEM INFO </h4>
        <div className='my-0 d-flex justify-content-between'>
            <p className='dark-secondary-h'> ID: </p>
            <p> EC001 </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Name: </p>
            <p> Keyboard Mechanical </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Quantity: </p>
            <p> 85 </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Location: </p>
            <p> Japan </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Category: </p>
            <p> Electronics </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Price: </p>
            <p className='green-font-color'> $129.99 </p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Supplier: </p>
            <p> Corsair </p>
        </div>
    </>)
}

export default SearchPage