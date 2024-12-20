import React from 'react';
import './../pages.scss'
import ContentRibbonWidget from '../../components/widgets/content-ribbon/ContentRibbon';

function HomePage() {
  return  (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-xs-12'>
              <h1 className='banner_title'>
              Delivering Enhanced 
              Audit Quality and Insights 
              <span className='bold_'>Driven by Technology</span>
              </h1>
            </div>
            <div className='col-sm-6 col-xs-12'>
              <div className='banner_txt'>
                <span className='head_'>Powering Audit Efficiency, Accuracy, and Insight through Technology</span>
                <div className='txt_style'>
                  <p>At KPMG we believe that it is not just about reaching the right opinion, but how we reach that opinion. We consider risks to the quality of our audit in our engagement risk assessment and planning discussions.​</p>
                </div>
                <div className='btn_wrap'>
                  <a href='#/engagement' className='btn_style'>View the Current Engagement</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='strategy_value_sec'>
        <ContentRibbonWidget properties={{image:import.meta.env.BASE_URL + "images/strategy-img.jpg", heading:"KPMG Leverages Technology to Drive Audit Strategy and Value" , textContent:"We have sought to embed technology in our audit since we became Barclays auditors in 2017, doing this thoughtfully in the areas that make sense, and only where technology delivers enhanced audit quality, increased efficiencies, and greater insight. The roadmap below demonstrates the technology we have progressively deployed year on year from 2017 – 2023, and continues to be in use today"} }  />
        {/* <ContentRibbonWidget properties={{heading:"test", text:"s"} }  /> */}
        {/* <div className='container'>
          <div className='row'>
            <div className='col-sm-4 lft_img'>
              <img src={import.meta.env.BASE_URL + "images/strategy-img.jpg"} alt="" width="auto" />
            </div>
            <div className='col-sm-8'>
              <div className='txt_box'>
              <span className='head_'>KPMG Leverages Technology to Drive Audit Strategy and Value</span>
                <div className='txt_style'>
                  <p>We have sought to embed technology in our audit since we became Barclays auditors in 2017, doing this thoughtfully in the areas that make sense, and only where technology delivers enhanced audit quality, increased efficiencies, and greater insight. The roadmap below demonstrates the technology we have progressively deployed year on year from 2017 – 2023, and continues to be in use today.​</p>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
      </section>

      <section className='audit_timeline_ section_'>
        <div className='container'>
          <div className='title_bar'>
            <label className='title_'>Automating the Audit Since 2017</label>
            <div className='filter_options'>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  All Capability Areas
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">All Capability Areas1</a></li>
                    <li><a className="dropdown-item" href="#">All Capability Areas</a></li>
                    <li><a className="dropdown-item" href="#">All Capability Areas</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  All Business Units
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">All Business Units</a></li>
                    <li><a className="dropdown-item" href="#">All Business Units</a></li>
                    <li><a className="dropdown-item" href="#">All Business Units</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  All FS Captions
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">All FS Captions</a></li>
                    <li><a className="dropdown-item" href="#">All FS Captions</a></li>
                    <li><a className="dropdown-item" href="#">All FS Captions</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  All Years Deployed
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">All Years Deployed</a></li>
                    <li><a className="dropdown-item" href="#">All Years Deployed</a></li>
                    <li><a className="dropdown-item" href="#">All Years Deployed</a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
          <div className='tech-roadmap'>
            <img src={import.meta.env.BASE_URL + "images/headers.png"} alt="" width="auto" />
            <img src={import.meta.env.BASE_URL + "images/table.png"} alt="" width="auto" />
          </div>
        </div>
      </section>

      <section className='engagmnt_team section_'>
        <div className='container'>
          <label className='title_'>Your Engagement Team</label>
          <div className='row align-items-center'>
            <div className='col-sm-6 left_sec'>
              <div className='team_detail'>
                <div className='img_'>
                  <img src={import.meta.env.BASE_URL + "images/team-img1.png"} alt="" width="auto" />
                </div>
                <div className='detail_box'>
                  <div className='name_design'>
                    <label className='name_'>Elizabeth Neilsen</label>
                    <span className='desig_'>Senior Partner</span>
                  </div>
                  <div className='contact_detail'>
                    <span className='ph_mail'>Tel: +44 (0)20 7311 1000</span>
                    <span className='ph_mail'>e.neilsen@kpmg.uk.co</span>
                  </div>
                  <div className='addrs_'>
                    <p>London - Canada Square<br/>
                      15 Canada Square,<br/>
                      Canary Wharf<br/>
                      London, E14 5GL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 right_sec'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='team_detail'>
                    <div className='img_'>
                      <img src={import.meta.env.BASE_URL + "images/team-img2.png"} alt="" width="auto" />
                    </div>
                    <div className='detail_box'>
                      <div className='name_design'>
                        <label className='name_'>Elizabeth Neilsen</label>
                        <span className='desig_'>Senior Partner</span>
                      </div>
                      <div className='contact_detail'>
                        <span className='ph_mail'>Tel: +44 (0)20 7311 1000</span>
                        <span className='ph_mail'>e.neilsen@kpmg.uk.co</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                <div className='team_detail'>
                    <div className='img_'>
                      <img src={import.meta.env.BASE_URL + "images/team-img3.png"} alt="" width="auto" />
                    </div>
                    <div className='detail_box'>
                      <div className='name_design'>
                        <label className='name_'>Elizabeth Neilsen</label>
                        <span className='desig_'>Senior Partner</span>
                      </div>
                      <div className='contact_detail'>
                        <span className='ph_mail'>Tel: +44 (0)20 7311 1000</span>
                        <span className='ph_mail'>e.neilsen@kpmg.uk.co</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                <div className='team_detail'>
                    <div className='img_'>
                      <img src={import.meta.env.BASE_URL + "images/team-img4.png"} alt="" width="auto" />
                    </div>
                    <div className='detail_box'>
                      <div className='name_design'>
                        <label className='name_'>Elizabeth Neilsen</label>
                        <span className='desig_'>Senior Partner</span>
                      </div>
                      <div className='contact_detail'>
                        <span className='ph_mail'>Tel: +44 (0)20 7311 1000</span>
                        <span className='ph_mail'>e.neilsen@kpmg.uk.co</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                <div className='team_detail'>
                    <div className='img_'>
                      <img src={import.meta.env.BASE_URL + "images/team-img5.png"} alt="" width="auto" />
                    </div>
                    <div className='detail_box'>
                      <div className='name_design'>
                        <label className='name_'>Elizabeth Neilsen</label>
                        <span className='desig_'>Senior Partner</span>
                      </div>
                      <div className='contact_detail'>
                        <span className='ph_mail'>Tel: +44 (0)20 7311 1000</span>
                        <span className='ph_mail'>e.neilsen@kpmg.uk.co</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='crent_engmnt section_'>
        <div className='container'>
          <div className='btn_wrap'>
            <a href='#' className='btn_style'>View the Current Engagement <i className="bi bi-chevron-right"></i> </a>
          </div>
        </div>
      </section>


    </>

    )
}

export default HomePage;