import React from 'react'

export default function ErrorPage() {
    return (
        <div>
            <header className='header' data-bs-theme="light">
                <div className="navbar gap-5 shadow-sm">
                    <a href="#" className="navbar-brand d-flex">
                        <img src={import.meta.env.BASE_URL + "images/barclays-logo.svg"} alt="" width="auto" />
                    </a>
                    <a href="#" className="navbar-brand d-flex">
                        <img src={import.meta.env.BASE_URL + "images/kpmg-logo.svg"} alt="" width="auto" />
                    </a>
                </div>

            </header>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">401</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Not Authorized
                                    </h3>

                                    <p>You are not authorized to access this page , please contact administrator</p>
                                    <a href="#/login" className="link_404">Login</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
