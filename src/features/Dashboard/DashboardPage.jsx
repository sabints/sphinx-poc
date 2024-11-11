import React, { useEffect, useState } from 'react';
import './dashboard.css';
import ProfileCard from '../../components/widgets/prodile-card/ProfileCard';
import ChartCard from '../../components/widgets/chart-card/Chartcard';
import DocumentCard from '../../components/widgets/document-card/DocumentCard';
import MediaCard from '../../components/widgets/media-card/MediaCard';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function DashBoard() {
    const [templateData, setTemplateData] = useState([]);
    const layout = [
        { i: 'profile', x: 0, y: 0, w: 12, h: 3.92 }, // Full-width profile widget
        { i: 'chart', x: 0, y: 4, w: 5, h: 3.92 },   // Chart placed below the profile
        { i: 'media', x: 5, y: 4, w: 7, h: 3.92 },    // Media placed beside the chart
        { i: 'document', x: 0, y: 8, w: 7, h: 3.92 }  // Document below chart/media
    ];


    useEffect(() => {

        fetch('./db/Templates/barclays-audit-template.json')
            .then((resoponse) => resoponse.json())
            .then((wdata) => {
                setTemplateData(wdata.Widgets);
                console.log(templateData.length);
            })
            .catch((error) => {
                console.log('Error loading JSON :', error)
            })
    }, [])

    const renderWidget = (widget) => {
        switch (widget.WidgetType) {
            case 'ProfileWidget':
                return <ProfileCard data={widget} />;
            case 'ChartWidget':
                return <ChartCard data={widget} />;
            case 'DocumentWidget':
                return <DocumentCard data={widget} />;
            case 'MediaWidget':
                return <MediaCard data={widget} />;
            default:
                return null;
        }
    };

    return (


        <div>
            <header data-bs-theme="light">
                <div className="navbar shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex">
                            <img src="src/assets/images/barclays-logo.png" alt="" height="25px" width="auto" />
                        </a>
                        <div className="search-container">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Query your data" />
                            <i className="bi bi-mic"></i>
                        </div>
                        <a href="#" className="navbar-brand d-flex">
                            <img src="/src/assets/images/kpmg-logo.png" alt="" height="25px" width="auto" />
                        </a>
                    </div>
                </div>
            </header>
            {/* <section>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={100}
                    width={1200}
                    draggableHandle=".icon-drag" // optional to add drag handle
                >
             
                    <div key="profile" className="grid-stack-item-content"><ProfileCard /></div>
                    <div key="chart" className="grid-stack-item-content"><ChartCard /></div>
                    <div key="document" className="grid-stack-item-content"><DocumentCard /></div>
                    <div key="media" className="grid-stack-item-content"><MediaCard /></div>
                </GridLayout>
            </section> */}
            <section>


                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={350}
                    width={1200}
                    draggableHandle=".icon-drag" // optional to add drag handle
                >
                    {
                        templateData.map((widget, index) => (

                            <div key={widget.WidgetName + `widget-${index}`} className="grid-stack-item-content" data-grid={widget.layout} >
                                {renderWidget(widget)}
                            </div>
                        ))
                    }
                </GridLayout>


            </section>
        </div>


    );
}

export default DashBoard;
