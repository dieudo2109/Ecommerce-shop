import React from 'react'
import { NavLink } from 'react-router-dom'
export default function About() {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself.
                            To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things theyre capable of
                            no matter who they are, where theyre from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.
                            Fashion democracy
                            Choice for all
                            Our audience (AKA you) is wonderfully unique, and we do everything we can to help you find your fit. We offer our ASOS Brands in more than 30 sizes  and we're committed to providing all sizes at the same price
                            so you can be confident weve got the perfect thing for you.
                        </p>
                        <NavLink to='/contact' className="btn btn-outline-primary ">Contact us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src='./accsets/about.png' alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}
