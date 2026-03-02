import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Panel from "../components/Panel";
import searchIcon from "../assets/icons/search.svg";
import addIcon from "../assets/icons/plus.svg";
import deleteIcon from "../assets/icons/delete.svg";
import rightArrow from "../assets/icons/right-arrow.svg";;
import { Link } from "react-router-dom";



const Home = () => {
    return (<>
        <div className="vh-100 vw-100 container-fluid dark-bg-color p-4 ">
            <Header/>
            <Body/>
            {/* <Operations/> */}
        </div>
    </>)
}   

const Header = () => {
    return ( <>
        <div >
            <h1 className='fw-bolder'> HASHTABLE_SYS </h1>
            <p className="dark-secondary-h "> Hash Table Implementation • Real-time Benchmarking • Collision Resolution via Chaining</p>
        </div>
    </>)
}

const Body = () => {
    return ( <>
    <Container fluid className='p-0 my-5'>
      <Row className='my-1'>
        <Panel  title={"TOTAL ITEMS"} value={10} className='blue-border-panel'/>
        <Panel title={"OPERATIONS"} value={0} className='blue-border-panel'/>
        <Panel title={"INSERTS"} value={0} className='green-border-panel'/>
        <Panel title={"SEARCHES"} value={0} className='blue-border-panel'/>
        <Panel title={"DELETIONS"} value={0} className='red-border-panel'/>
      </Row>
      <Row className='my-1'>
        <InsertPanel/>
        <SearchPanel/>
        <DeletePanel/>
      </Row>
    </Container>
    </>)
}

const InsertPanel = () => {
    return ( <>
    <Col style={{ maxHeight: '100%' }} className='dark-panel m-2 p-3 rounded green-border-panel'>
        <div className='my-2 d-flex align-items-center justify-content-start text-center'> 
            <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: "#1a3a29"}} >
                <img src={addIcon} alt="" height={25}/>
            </div>
            <h5 className='mx-2 mb-0'> INSERT </h5>
        </div>
        <p className='dark-secondary-h'> Add items to hash table with automated data feeding and real-time benchmarking. </p>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Manual Insert</p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Auto Feed</p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Collision Detection </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <Button as={Link} to="/insert" variant="success" className='d-flex align-items-center justify-content-center w-100 text-center'>OPEN DASHBOARD <img className='mx-2' src={rightArrow} height={15}/></Button>
    </Col>
    </> )
}

const SearchPanel = () => {
    return ( <>
    <Col style={{ maxHeight: '100%' }}   className='dark-panel m-2 p-3 rounded blue-border-panel'>
        <div className='my-2 d-flex align-items-center justify-content-start text-center'> 
            <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: "#1f2d47"}} >
                <img src={searchIcon} alt="" height={25}/>
            </div>
            <h5 className='mx-2 mb-0'> SEARCH </h5>
        </div>
        <p className='dark-secondary-h'> Find items by ID with hash function visualization and performance metrics. </p>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> ID Lookup </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Comparison Count </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Execution Time </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <Button variant="primary" className='d-flex align-items-center justify-content-center w-100 text-center'>OPEN DASHBOARD <img className='mx-2' src={rightArrow} height={15}/></Button>
    </Col>
    </> )
}

const DeletePanel = () => {
    return ( <>
    <Col style={{ maxHeight: '100%' }}  className='dark-panel m-2 p-3 rounded red-border-panel'>
        <div className='my-2 d-flex align-items-center justify-content-start text-center'> 
            <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: "#432124"}} >
                <img src={deleteIcon} alt="" height={25}/>
            </div>
            <h5 className='mx-2  mb-0'> DELETE </h5>
        </div>
        <p className='dark-secondary-h'> Remove items from hash table with chain reorganization and memory tracking. </p>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> ID-based Removal </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Chain Update</p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <div className='d-flex justify-content-between'>
            <p className='dark-secondary-h'> Memory Freed </p>
            <p style={{color: "#0088e0"}}> ✓</p>
        </div>
        <Button variant="danger" className='d-flex align-items-center justify-content-center w-100 text-center'>OPEN DASHBOARD <img className='mx-2' src={rightArrow} height={15}/></Button>
    </Col>
    </> )
}

const IconHeader = (icon, bgColor, header) => {
    return (
        <div className='border my-2 d-flex align-items-center justify-content-start text-center'> 
            <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: {bgColor}}} >
                <img src={icon} alt="" height={25}/>
            </div>
            <h5 className='mx-2'> {header} </h5>
        </div>
    )
}




export default Home