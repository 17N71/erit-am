import React from 'react';
import './scss/repost.scss'
function Repost(props) {
    return (
        <ul className="repost">
            <li className="repost-item"><a href="#" className="repost-link icon icon-fb"></a></li>
            <li className="repost-item"><a href="#" className="repost-link icon icon-yt"></a></li>
            <li className="repost-item"><a href="#" className="repost-link icon icon-sms"></a></li>
            <li className="repost-item"><a href="#" className="repost-link icon icon-phone"></a></li>
            <li className="repost-item"><a href="#" className="repost-link icon icon-map"></a></li>
        </ul>
    );
}

export default Repost;