import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Panel from "../components/Panel"



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
            <h1> HASHTABLE_SYS </h1>
            <p className="dark-secondary-h "> Hash Table Implementation • Real-time Benchmarking • Collision Resolution via Chaining</p>
        </div>
    </>)
}

const Body = () => {
    return ( <>
    <Container fluid className='p-0 my-5'>
      <Row className='my-1'>
        <Panel title={"TOTAL ITEMS"} value={10} className='insert'/>
        <Panel title={"OPERATIONS"} value={0}/>
        <Panel title={"INSERTS"} value={0}/>
        <Panel title={"SEARCHES"} value={0}/>
        <Panel title={"DELETIONS"} value={0}/>
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
    <Col style={{ maxHeight: '100%' }} className='flex-grow-1 dark-panel m-2 p-3 rounded border-panel'>
        <h5> INSERT </h5>
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
        <Button variant="success" className='w-100 text-center'>OPEN DASHBOARD</Button>
    </Col>
    </> )
}

const SearchPanel = () => {
    return ( <>
    <Col style={{ maxHeight: '100%' }}   className='flex-grow-1 dark-panel m-2 p-3 rounded border-panel'>
        <h5> SEARCH </h5>
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
        <Button variant="primary" className='w-100 text-center'>OPEN DASHBOARD</Button>
    </Col>
    </> )
}

const DeletePanel = () => {
    return ( <>
    <Col style={{ maxHeight: '100%' }}  className='flex-grow-1 dark-panel m-2 p-3 rounded border-panel'>
        <h5> DELETE </h5>
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
        <Button variant="danger" className='w-100 text-center'>OPEN DASHBOARD</Button>
    </Col>
    </> )
}




export default Home