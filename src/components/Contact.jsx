import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="text-primary fw-bold mb-4">Contact</h1>
                        <hr />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src='./accsets/contact.png' alt="contact" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">First Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput" placeholder="Peter..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">Last Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput" placeholder="Jeny..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary text-align-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
