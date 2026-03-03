import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import '../App.css'
import homeIcon from "../assets/icons/home.svg"

const Header = ({icon, title, text, nav=false,  iconBg, height = 20}) => {
    return (<>
        <Container fluid className=" dark-bg-color d-flex flex-column flex-md-row align-items-center justify-content-between text-center">
            <div>
                <div className='d-flex flex-column flex-md-row d-flex align-items-center justify-content-start text-center'> 
                    <div className='p-2 rounded d-flex align-items-center justify-content-center' style={{background: iconBg}} >
                        <img src={icon} alt="" height={height}/>
                    </div>
                    <h1 className='mx-2 mb-0'> {title} </h1>
                </div>
                <p className="dark-secondary-h mx-5 ">{text} </p>
            </div>
            {
            nav ?    
            <div>
                <Button as={Link} to='/'  className='d-flex align-items-center justify-content-center'>
                    <div className=' d-flex align-items-center justify-content-start text-center'> 
                        <img src={homeIcon} alt="" height={20}/>
                        <p className='mx-2 mb-0'> Home </p>
                    </div>
                </Button>
            </div> : <></>}
        </Container>
    </>)
}

export default Header