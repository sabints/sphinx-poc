import React from 'react'
import HeaderComponent from '../../components/Layout/Header'

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
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">401</h1>


                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Not Authorized
                                    </h3>

                                    <p>You are not authorized to access this page , please contact administrator</p>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
