import React from 'react'
import Taskone from './Taskone'
import { Carousel } from 'react-bootstrap'

const Events = () => {
  return (
    <>
    <Taskone/>
    <div className="container-fluid d-flex">
    <div className="col-lg-3"></div>
    <div className="col-lg-6 mt-5">
    <div className='caro'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:"70vh",width:"250vh",backgroundSize:"contain"}}
          className="d-block "
          src="https://www.eventfaqs.com/Uploads2018/00Uploads%202020/January/22Jan/IMG_6424.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"70vh",width:"250vh",backgroundSize:"contain"}}
          className="d-block "
          src="https://www.japantimes.co.jp/wp-content/uploads/2021/12/np_file_128257.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"70vh",width:"250vh",backgroundSize:"contain"}}
          className="d-block"
          src="https://d39w7f4ix9f5s9.cloudfront.net/ca/fe/67a51ed048209053f0622f1e136c/jeff-wilke-amazon-prime-air-remars-june-2019.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    </div>
    <div className="col-lg-3"></div>
    </div>

    </>
    
  )
}

export default Events