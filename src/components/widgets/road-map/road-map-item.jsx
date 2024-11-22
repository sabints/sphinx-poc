import React from 'react'
import './road-map.scss'
export default function RoadmapItem({title}) {
    return (
        <div className="roadmap-item">
            <span>{title}</span>
        </div>
    );

}
