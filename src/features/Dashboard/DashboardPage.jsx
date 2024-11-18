import React, { useEffect, useState } from 'react';
import './dashboard.css';
import ProfileCard from '../../components/widgets/prodile-card/ProfileCard';
import ChartCard from '../../components/widgets/chart-card/Chartcard';
import DocumentCard from '../../components/widgets/document-card/DocumentCard';
import MediaCard from '../../components/widgets/media-card/MediaCard';
import GridLayout from 'react-grid-layout';
import { db } from '../../firebase'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';


function DashBoard() {
    const [templateData, setTemplateData] = useState([]);
    useEffect(() => {

        const queryParams = new URLSearchParams(window.location.search)
        const param1 = queryParams.get('template');
        const fetchSampleTemplate = async () => {
            try {
                // Reference to the document
                const docRef = doc(db, "Client - Barclays", param1 == undefined ? "Workspace-Templatev00" : param1);

                // Fetch the document
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {

                    const data = docSnap.data();
                    setTemplateData(data.templateData);


                } else {
                    console.error("No such document exists!");
                }
            } catch (err) {
                console.error("Error fetching document:", err);
            }
        };

        fetchSampleTemplate();
    }, [])

    const renderWidget = (widget) => {
        const wname = widget.layoutConfig.i.split('-')[0]
        switch (wname) {
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

                <div className="drop-zone">
                    <GridLayout
                        className="layout"

                        cols={12}
                        // rowHeight={50}
                        width={1250}
                        margin={[0, 20]}
                        allowOverlap={false}
                        preventCollision={false}
                        isBounded={true}
                        isResizable={true}
                        draggableHandle=".icon-drag" // optional to add drag handle
                    >
                        {
                            templateData.map((widget, index) => (

                                <div key={widget.layoutConfig.i + `widget-${index}`} className="grid-stack-item-content" data-grid={{
                                    x: widget.layoutConfig.x,
                                    y: widget.layoutConfig.y,
                                    w: widget.layoutConfig.w,
                                    h: widget.layoutConfig.h,
                                    minW: widget.layoutConfig.minW,
                                    minH: widget.layoutConfig.minH
                                }}  >
                                    {renderWidget(widget)}
                                </div>
                            ))
                        }
                    </GridLayout>
                </div>

            </section>
        </div>


    );
}

export default DashBoard;
