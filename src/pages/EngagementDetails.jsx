import React from 'react';
import ProfileCard from '../components/widgets/prodile-card/ProfileCard';
import DocumentCard from '../components/widgets/document-card/DocumentCard';
import MediaCard from '../components/widgets/media-card/MediaCard';
import ChartCard from '../components/widgets/chart-card/Chartcard';


function EngagementDetailsPage() {
  return (
    <>
      <section className='profile_banner'>
        <div className='container'>
          <ProfileCard properties={{ HeaderLeft: "FY 2024 Final Audit", HeaderRight: "123132131" }} />
        </div>
      </section>
      <section className='section'>
        <div className='container content'>
          <span className='sec_link'>
            Go to : <a href='#' target='_blank'>Property plant and Equipment information</a>
          </span>
        </div>

      </section>
      <section className='section'>
        <div class="container">
          <div class="row row-cols-2">
            <div class="col">
              <DocumentCard title={'PDF Report Vertical'} />
            </div>
            <div class="col">
              <MediaCard />
            </div>
            <div class="col">
              <MediaCard />
            </div>
            <div class="col">
              <ChartCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EngagementDetailsPage;