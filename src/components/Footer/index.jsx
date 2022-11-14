import React from 'react'

export default function Footer() {
    return (
        <div>

            <footer className="text-center text-lg-start bg-white text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 link-secondary btn btn-outline-primary btn-floating m-1">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 link-secondary btn btn-outline-secondary btn-floating m-1">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 link-secondary btn btn-outline-danger btn-floating m-1">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="" className="me-4 link-secondary btn btn-outline-warning btn-floating m-1">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 link-secondary btn btn-outline-info btn-floating m-1">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 link-secondary btn-outline-dark btn-floating m-1 btn">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Shopping world
                                </h6>
                                <p>
                                    A place to shop for everything from world famous brands.
                                    We are committed to product quality always comes first.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Men's Clothing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Woment's Clothing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Jewelery</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Electronics</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fa fa-home me-3 text-secondary"></i> Hanoi, NY 10012, VN</p>
                                <p>
                                    <i className="fa fa-envelope me-3 text-secondary"></i>
                                    dieudo12m@gmail.com
                                </p>
                                <p><i className="fa fa-phone me-3 text-secondary"></i> + 0384729633</p>
                                <p><i className="fa fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" >
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Shopnow.com</a>
                </div>

            </footer>

        </div>
    )
}
