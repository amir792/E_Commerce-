import React, { Component } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default class MyFooter extends Component {
  render() {
    return(<footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">About Us</h5>
          <p>
            We are a company that specializes in creating innovative
            products for our customers. Our mission is to provide the best
            possible experience for our users.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Services</h5>
          <ul className="list-unstyled mb-0">
            <li>Web Design</li>
            <li>Mobile App Development</li>
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Contact Us</h5>
          <p className="mt-3">
            123 Main Street
            <br />
            Anytown, USA
            <br />
            <br />
            Phone: 555-555-5555
            <br />
            Email: info@mycompany.com
          </p>
        </div>
      </div>
    </div>
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 My Company, Inc. All rights reserved.
    </div>
  </footer>
);
}}
