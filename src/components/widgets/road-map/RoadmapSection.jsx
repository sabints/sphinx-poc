import React from 'react'
import RoadmapItem from './road-map-item';
import './road-map.scss'
export default function RoadmapSection({year}) {
    return (
        <div className="roadmap-section">
            <h2>{year}</h2>
            <div className="roadmap-items">
                {/* Add items based on the year and categories */}
                <RoadmapItem title="KPMG Clara for Barclays - Collaboration portal V1.0" />
                {/* More items */}
            </div>
        </div>
    );
}
