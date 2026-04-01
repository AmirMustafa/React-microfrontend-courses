import './Courses.css';

const Courses = () => {
    return (
        <>
            <div className="container">
                <div className="cart">
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTTyD6q0CsB4sIUtfQo6V7nWRZldeBrfNmQ&s" alt="Part 1" />
                    <h4>Name: MicroFrontEnd</h4>
                    <h5>Description: MicroFrontEnd 1</h5>
                    <p>Duration: 1 hour</p>
                </div>
                <div className="cart">
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTTyD6q0CsB4sIUtfQo6V7nWRZldeBrfNmQ&s" alt="Part 2" />
                    <h4>Name: MicroFrontEnd</h4>
                    <h5>Description: MicroFrontEnd 2</h5>
                    <p>Duration: 2 hours</p>
                </div>
            </div>
        </>
    )
}
export default Courses