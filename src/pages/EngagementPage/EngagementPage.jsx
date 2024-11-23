import React, { useEffect, useState } from 'react';
import ProfileCard from '../../components/widgets/prodile-card/ProfileCard';
import ContentRibbonWidget from '../../components/widgets/content-ribbon/ContentRibbon';
import BalanceSheetTable from '../../components/widgets/engagement-components/balance-sheet-table/BalanceSheetTable';
import ToolsWidget from '../../components/widgets/engagement-components/tools-list/ToolsWidget';
import './../pages.scss'

function EngagementPage() {
  const [data, setData] = useState([]);
  const [toolData, setToolData] = useState({});
  useEffect(() => {
    const listData = [
      {
        id: '1',
        account: 'Cash and Cash equivalents',
        balance: 30000000,
        tools: [
          { toolname: 'Intrest Income Recalc', color: '#3A8439' },
          { toolname: 'KCw', color: '#C57316' },
          { toolname: 'Data Snipper', color: '#9E4486' },
          { toolname: 'Revenue Trend Analysis', color: '#BD952F' },
          { toolname: 'KPMG Clara', color: '#C57316' },
          { toolname: 'IRC', color: '#3A8439' },
          { toolname: 'Digital Media Analytics', color: '#3455CC' },
        ]
      }, {
        id: '1',
        account: 'Property plant and equipments',
        balance: 30000000,
        tools: [
          { toolname: 'KCw', color: '#C57316' },
          { toolname: 'Data Snipper', color: '#9E4486' },
          { toolname: 'Revenue Trend Analysis', color: '#BD952F' },
          { toolname: 'KPMG Clara', color: '#C57316' },
        ]
      }
      , {
        id: '1',
        account: 'Trading portfolio assets',
        balance: 30000000,
        tools: [
          { toolname: 'Data Snipper', color: '#9E4486' },
          { toolname: 'Revenue Trend Analysis', color: '#BD952F' },
          { toolname: 'KPMG Clara', color: '#C57316' },
          { toolname: 'IRC', color: '#3A8439' },
        ]
      }
      , {
        id: '1',
        account: 'Current tax assets',
        balance: 30000000,
        tools: [
          { toolname: 'Intrest Income Recalc', color: '#3A8439' },
          { toolname: 'KCw', color: '#C57316' },
          { toolname: 'Data Snipper', color: '#9E4486' },
          { toolname: 'Revenue Trend Analysis', color: '#BD952F' },
          { toolname: 'KPMG Clara', color: '#C57316' },
          { toolname: 'IRC', color: '#3A8439' },
          { toolname: 'Digital Media Analytics', color: '#3455CC' },
        ]
      }
    ];
    setData(listData);


  }, [])
  return (
    <>

      <section className='profile_banner'>
        <div className='container'>
          <ProfileCard properties={{ HeaderLeft: "FY 2024 Final Audit", HeaderRight: "123132131" }} />
        </div>
      </section>
      <section className='widget-full'>
        <ContentRibbonWidget properties={{
          image: "https://s3-alpha-sig.figma.com/img/e762/99d1/9859583517d9afa6c24dde29fdee8502?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vr67zS0amfd9UHVn3A38~XZACtzgVTHoYWFqzdR2nEpsZYqFRtZzm9Bn8QTbBu9EcP0j5YkRjDKPMrE52f82-TEt2HRFUPnp1BpgvFjF3kDTmOGqD76IE7BkUeP9F-jbk0u0S1yLUNIJOrykBY4PE-yzJuArO-My3vBcqVF6k2Ej5rhnBfiYMcYf51zd1OjlbZ~fiASIkheTyraZFawSJ4TpLXRxwnZjvl5MMyj21mRiLFnoI2yjUf2Wxm~UKOmaKtNZe0mzJqqDo6G2zNXl4MVGnQI6d~Rs-fLQWQnTM1fUqxi8Z4znLPaWN33z~8VVFqbJiuQShO2wyqbRDUoINA__",
          textContent: "",
          heading: "Main Heading",
          list: [
            {
              heading: "KPMG Insights",
              listItem: [

                {
                  url: "https://somerandomeurl.com/#/page1",
                  text: "KPMG Global Technology Report 2024"
                },
                {
                  url: "https://somerandomeurl.com/#/page2",
                  text: "Economic and Commercial Outlook - September 2024 "
                },
                {
                  url: "https://somerandomeurl.com/#/page3",
                  text: "Autumn Budget 2024: On-Demand Webinar"
                },
                {
                  url: "https://somerandomeurl.com/#/page4",
                  text: "Consumer Pulse October 2024"
                },

              ]
            }, {
              heading: "Recent Updates",
              listItem: [

                {
                  url: "https://somerandomeurl.com/#/page1",
                  text: "KPMG Global Technology Report 2024"
                },
                {
                  url: "https://somerandomeurl.com/#/page2",
                  text: "Economic and Commercial Outlook - September 2024 "
                },
                {
                  url: "https://somerandomeurl.com/#/page3",
                  text: "Autumn Budget 2024: On-Demand Webinar"
                },
                {
                  url: "https://somerandomeurl.com/#/page4",
                  text: "Consumer Pulse October 2024"
                },

              ]
            }
          ]
        }} />
      </section>
      <section className='account-table-section'> 
        <div className='container'>
          <label>FY 2024 Final Audit Accounts & Technologies</label>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-balance-sheet-tab" data-bs-toggle="pill" data-bs-target="#pills-balance-sheet" type="button" role="tab" aria-controls="pills-balance-sheet" aria-selected="true">
                Balance Sheet
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-income-statement-tab" data-bs-toggle="pill" data-bs-target="#pills-income-statement" type="button" role="tab" aria-controls="pills-income-statement" aria-selected="false">
                Income Statement
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-tech-roadmap-tab" data-bs-toggle="pill" data-bs-target="#pills-tech-roadmap" type="button" role="tab" aria-controls="pills-tech-roadmap" aria-selected="false">
                Tech Road Map
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-audit-tools-tab" data-bs-toggle="pill" data-bs-target="#pills-audit-tools" type="button" role="tab" aria-controls="pills-audit-tools" aria-selected="false" >
                General Audit Tools
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade pills-balance-sheet show active" id="pills-balance-sheet" role="tabpanel" aria-labelledby="pills-balance-sheet-tab" tabIndex="0">
              <div className="filter-strip" >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Assets Type
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <BalanceSheetTable data={data} />
            </div>
            <div className="tab-pane pills-income-statement-tab fade" id="pills-income-statement" role="tabpanel" aria-labelledby="pills-income-statement-tab" tabIndex="0">

              Income Statement
            </div>
            <div className="tab-pane pills-tech-roadmap fade" id="pills-tech-roadmap" role="tabpanel" aria-labelledby="pills-tech-roadmap-tab" tabIndex="0">
              <div className="filter-strip" >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Capability Areas
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Business Units
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All FS Captions
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Years Deployed
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='tech-roadmap'>
                <img src={import.meta.env.BASE_URL + "images/headers.png"} alt="" width="auto" />
                <img src={import.meta.env.BASE_URL + "images/table.png"} alt="" width="auto" />
              </div>
            </div>
            <div className="tab-pane pills-audit-tools fade" id="pills-audit-tools" role="tabpanel" aria-labelledby="pills-audit-tools-tab" tabIndex="0">
              <div className="filter-strip" >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Capability Areas
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Audit Phases
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Years Deployed
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ToolsWidget key='toolslist' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default EngagementPage;