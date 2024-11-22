import React from 'react'
import './road-map.scss'
import RoadmapSection from './RoadmapSection'
export default function TechRoadmap() {
    return (
        <div className="tech-roadmap">
            <RoadmapSection year="2017" />
            <RoadmapSection year="2018" />
            <RoadmapSection year="2019" />
            <RoadmapSection year="2020" />
            <RoadmapSection year="2021" />
            <RoadmapSection year="2022" />
            <RoadmapSection year="2023" />
        </div>
    )
}
