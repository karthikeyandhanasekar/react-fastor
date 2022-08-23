import { Dropdown } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Form from 'react-bootstrap/Form';

const Header = () => {

    return (
        <header>
            {/* Notification bar */}
            <div className="text-center bg-light py-1">
                <p>Summer sale for all swim suits-off 50%!  &nbsp; <span className="fw-semibold">Shop Now</span>
                    <button className="bg-transparent     border-0 fs-5  float-end me-2 ">X</button>
                </p>
            </div>

            {/* Title Content */}
            <div className="d-flex  flex-column flex-md-row justify-content-around align-items-center py-4
            border-bottom border-2
            ">

                {/* search input */}
                <div className="rounded-pill bg-light p-3">
                    <input type={"text"} className="border-0 bg-transparent  px-3" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                    </svg>
                </div>
                {/* title */}
                <h1 className="fw-semibolder my-4">FA<span className="border-bottom border-5 border-danger">ST</span>OR</h1>

                {/* icons */}
                <div className="d-flex flex-row">

                    {/* Currency Toggle */}
                    <Form.Select size="md" className="border-0 ">
                        <option value={"USD"} selected>USD</option>
                        <option value={"INR"} >INR</option>
                        <option value={"AED"} >AED</option>
                    </Form.Select>

                    <svg xmlns="http://www.w3.org/2000/svg" className='me-4' width={50} viewBox="0 0 448 512">
                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width={50} className='me-4' viewBox="0 0 512 512">
                        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width={50} className='me-4' viewBox="0 0 576 512">
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>

                </div>
            </div>


            {/* Nav bar */}
            <div className='py-4 d-flex justify-content-center border-bottom border-2'>
                <Nav className="">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} className="text-danger fw-semibold">Shop</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Items</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} className="text-danger fw-semibold">Categories</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Items</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} className="text-danger fw-semibold">Men</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Items</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} className="text-danger fw-semibold">Women</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Items</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Item>
                        <Nav.Link href="" className="text-dark fw-semibold">Pages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/" className="text-dark fw-semibold" >Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/" className="text-dark fw-semibold" >Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>






        </header>
    )

}

export default Header