import React from 'react'
import {MdLocationOn} from 'react-icons/md'

function TravelCard(props) {
    return (
        <div className="main-container">
        <div className="travel-card">
                <img src ={`../../Images/${props.item.coverImage}`} className="card-image" />

                <div className="card-info">
                    <div className="card-top">
                        <p className="card-location">{props.item.location}</p>
                        <MdLocationOn size= {12} style={{fill: '#F55A5A'}}/>
                        <a className="google-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    
                    <p className="card-title">{props.item.title}</p>
                    <p className="card-date">{props.item.startDate}-{props.item.endDate}</p>                
                    <small className="card-desc">{props.item.description}</small>
                </div>
        </div>
        </div>
    )
}

export default TravelCard