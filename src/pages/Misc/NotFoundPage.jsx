import React from 'react'
import './misc.scss'
export default function NotFoundPage() {
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
                                    <h1 class="text-center ">404 </h1>

                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>
                                    <a href="" class="link_404">Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}