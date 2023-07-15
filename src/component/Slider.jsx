import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.newphotodownload.info/wp-content/uploads/2018/07/%D8%B4%D9%86%D8%B7-%D9%83%D8%B1%D9%88%D8%B4%D9%8A%D9%87-2.jpg?w=320&ssl=1"
            alt="First slide"
            style={{ height: "700px", width: "700px" }}/>
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.newphotodownload.info/wp-content/uploads/2018/07/%D8%B4%D9%86%D8%B7-%D9%83%D8%B1%D9%88%D8%B4%D9%8A%D9%87-4.jpg?w=288&ssl=1" alt="Second slide"
            style={{ height: "700px", width: "700px" }}/>
  
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.newphotodownload.info/wp-content/uploads/2018/07/%D8%B4%D9%86%D8%B7-%D9%83%D8%B1%D9%88%D8%B4%D9%8A%D9%87-6.jpg?w=320&ssl=1"
            alt="Third slide"
            style={{ height: "700px", width: "700px" }}/>
            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
