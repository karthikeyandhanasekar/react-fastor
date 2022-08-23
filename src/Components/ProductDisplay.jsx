
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

import { products } from '../assets/data/products';
const ProductDisplay = () => {
    const [product, setproduct] = useState(products.sort((a, b) => a.name.localeCompare(b.name)))
    const [productsUI, setproductsUI] = useState()
    const [pageitem, setpageitem] = useState()
    const [pageno, setpageno] = useState(1)
    useEffect(() => {
        const totalproduct = product.length
        const size = Number(6)
        const totalpage = Math.floor((totalproduct / size) + Number(1))


        const items = [...new Array(totalpage).keys()].map(number =>
            <Pagination.Item onClick={() => setpageno(number + 1)} key={number + 1} active={number + 1 === pageno}>
                {number + 1}
            </Pagination.Item>)


        // Page calculation
        const index = pageno - 1
        const start = (size * index)
        const end = (size * pageno) < totalproduct ? (size * pageno) : totalproduct

        const rowUI = React.Children.toArray(
            product.map(ele => <Col className="product" md={4} >
                <div className='productimage'>
                    <img className='' loading='lazy' src={require(`../assets/images/${ele.name}.webp`)} alt={ele.name} />
                </div>
                <br />
                <p>{ele.name}</p>

                {
                    ele.hasOwnProperty('offer') ?
                        <p className='text-danger fw-semibold '>${ele.offer} &nbsp; <span className='fw-lighter text-dark text-decoration-line-through'>${ele.price}</span>
                        </p>
                        :
                        <p className='text-danger fw-semibold '>${ele.price}</p>
                }
            </Col>).slice(start, end)
        )

        setpageitem(items)

        setproductsUI(rowUI)

    }, [product, pageno])

    // sort by alphabetics
    const sortchange = (e) => {
        const value = [...product]
        if (e.target.value === "A-Z")
            value.sort((a, b) => a.name.localeCompare(b.name))
        else
            value.sort((a, b) => b.name.localeCompare(a.name))

        setproduct(value)
    }
    // sortby price
    const sortbyprice = (e) => {
        const value = [...product]
        if (e.target.value === "L-H")
            value.sort((a, b) => a.price - b.price)
        else
            value.sort((a, b) => b.price - a.price)

        setproduct(value)
    }


    return (
        <section className="productdisplay  float-md-end  p-4    ">

            <div className="d-flex flex-wrap flex-row justify-content-between align-items-between">

                {/* Layout icon */}
                <div className="my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} className="me-3" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} className="me-3" viewBox="0 0 448 512">
                        <path d="M128 184C128 206.1 110.1 224 88 224H40C17.91 224 0 206.1 0 184V136C0 113.9 17.91 96 40 96H88C110.1 96 128 113.9 128 136V184zM128 376C128 398.1 110.1 416 88 416H40C17.91 416 0 398.1 0 376V328C0 305.9 17.91 288 40 288H88C110.1 288 128 305.9 128 328V376zM160 136C160 113.9 177.9 96 200 96H248C270.1 96 288 113.9 288 136V184C288 206.1 270.1 224 248 224H200C177.9 224 160 206.1 160 184V136zM288 376C288 398.1 270.1 416 248 416H200C177.9 416 160 398.1 160 376V328C160 305.9 177.9 288 200 288H248C270.1 288 288 305.9 288 328V376zM320 136C320 113.9 337.9 96 360 96H408C430.1 96 448 113.9 448 136V184C448 206.1 430.1 224 408 224H360C337.9 224 320 206.1 320 184V136zM448 376C448 398.1 430.1 416 408 416H360C337.9 416 320 398.1 320 376V328C320 305.9 337.9 288 360 288H408C430.1 288 448 305.9 448 328V376z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} className="me-3" viewBox="0 0 448 512">
                        <path d="M128 184C128 206.1 110.1 224 88 224H40C17.91 224 0 206.1 0 184V136C0 113.9 17.91 96 40 96H88C110.1 96 128 113.9 128 136V184zM128 376C128 398.1 110.1 416 88 416H40C17.91 416 0 398.1 0 376V328C0 305.9 17.91 288 40 288H88C110.1 288 128 305.9 128 328V376zM160 136C160 113.9 177.9 96 200 96H248C270.1 96 288 113.9 288 136V184C288 206.1 270.1 224 248 224H200C177.9 224 160 206.1 160 184V136zM288 376C288 398.1 270.1 416 248 416H200C177.9 416 160 398.1 160 376V328C160 305.9 177.9 288 200 288H248C270.1 288 288 305.9 288 328V376zM320 136C320 113.9 337.9 96 360 96H408C430.1 96 448 113.9 448 136V184C448 206.1 430.1 224 408 224H360C337.9 224 320 206.1 320 184V136zM448 376C448 398.1 430.1 416 408 416H360C337.9 416 320 398.1 320 376V328C320 305.9 337.9 288 360 288H408C430.1 288 448 305.9 448 328V376z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} className="" viewBox="0 0 448 512">
                        <path d="M128 184C128 206.1 110.1 224 88 224H40C17.91 224 0 206.1 0 184V136C0 113.9 17.91 96 40 96H88C110.1 96 128 113.9 128 136V184zM128 376C128 398.1 110.1 416 88 416H40C17.91 416 0 398.1 0 376V328C0 305.9 17.91 288 40 288H88C110.1 288 128 305.9 128 328V376zM160 136C160 113.9 177.9 96 200 96H248C270.1 96 288 113.9 288 136V184C288 206.1 270.1 224 248 224H200C177.9 224 160 206.1 160 184V136zM288 376C288 398.1 270.1 416 248 416H200C177.9 416 160 398.1 160 376V328C160 305.9 177.9 288 200 288H248C270.1 288 288 305.9 288 328V376zM320 136C320 113.9 337.9 96 360 96H408C430.1 96 448 113.9 448 136V184C448 206.1 430.1 224 408 224H360C337.9 224 320 206.1 320 184V136zM448 376C448 398.1 430.1 416 408 416H360C337.9 416 320 398.1 320 376V328C320 305.9 337.9 288 360 288H408C430.1 288 448 305.9 448 328V376z" />
                    </svg>

                </div>

                {/* Sort Option */}
                {/* TODO Need to complete */}
                <div className="d-flex flex-row">
                    <span className=''>
                        <Form.Select size="sm" className="border-0" onChange={sortchange}>
                            <option value={"A-Z"} selected>Alphabetically A-Z</option>
                            <option value={"Z-A"} >Alphabetically Z-A</option>
                        </Form.Select>
                    </span>

                    <span className=''>
                        <Form.Select size="sm" className="border-0" onChange={sortbyprice}>
                            <option value={""} selected>Recommended</option>
                            <option value={"L-H"} >Low to High</option>
                            <option value={"H-L"} >High to Low</option>
                        </Form.Select>
                    </span>
                </div>
            </div>
            <br />
            {/* Products Grid */}
            <Row className="productsgrid">
                {productsUI}
            </Row>
            <br />
            {/* Pagination */}
            <div className='d-flex flex-row justify-content-center '>
                <Pagination className=''>
                    {pageitem}
                </Pagination>
            </div>
        </section>
    )

}
export default ProductDisplay