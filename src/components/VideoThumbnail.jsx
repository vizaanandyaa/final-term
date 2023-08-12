import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@chakra-ui/react";

export function VideoThumbnail(props){
    return(
        <div className="thumbnail">
                <button className="thumbnail-btn">
                    <Link to={`/videos/${props.id}`}>
                        <img className="thumbnail-img" src={props.img} alt=""/>
                        <div className="thumbnail-overlay">
                        <Badge colorScheme='green' textAlign='right' pos="absolute" top="2" right="2">
                            {props.tag}
                        </Badge>
                            <p className="thumbnail-title">{props.title}</p>
                            {/* <p className="thumbnail-shop">tes</p> */}
                        </div>
                    </Link>
                </button>
        </div>
    )
}