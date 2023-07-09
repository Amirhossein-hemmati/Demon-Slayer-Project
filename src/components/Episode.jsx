import React from 'react';
import "../css/Episode.css"

export const Episode = ({name,rate,image}) => {
    return (
            <div className="episode">
                <a href="#"><img className="episode_img" src={image}/></a>
                <div className="episode_information">
                    <div >
                        <a className="episode_name" href="#">{name}</a>
                    </div>
                    <div className="episode_rate">
                        {rate}
                        <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FAB005/star--v1.png" alt="star--v1"/>
                    </div>
                </div>
            </div>
    );
};

