import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from "./footer"

export default class Sample extends Component {
  render() {
    return (
      <div>
        <Navbar/>


        <div className="text-center">
          <Footer/>
        </div>

      </div>
    )
  }
}
