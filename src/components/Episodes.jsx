import "../css/Episodes.css"
import {data} from "../data/data.js"
import {Episode} from "./Episode.jsx";
export const Episodes = () => {

    return (
            <div className="episodes">
                {data.map(({id,name,rate,image}) =>
                    <Episode key={id} name={name} rate={rate} image={image}/>
                )}
            </div>
    )
}