import React from 'react'
import {MdLocationOn} from 'react-icons/md'
function TravelCard(props) {
    return (
        <div className="travel-card">
            <img src ={`../../Images/${props.item.coverImage}`} className="card-image" />
            <div className="card-stats">
                <p className="card-title">{props.item.title}</p>
                <MdLocationOn />
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                
                <p className="card-location">{props.item.location}</p>
                <p className="card-date">{props.item.startDate}-{props.item.endDate}</p>
                <small className="card-desc">{props.item.description}</small>
            </div>
        </div>
    )
}

export default TravelCard