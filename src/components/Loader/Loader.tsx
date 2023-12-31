import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    <div className="loader">
        <Spinner animation="border" variant="info" className="loader-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Loader