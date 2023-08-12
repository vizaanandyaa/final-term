import React from "react";
import '../App.css'
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { Product } from "../components/Product";

export function VideoDetail(props){
    return(
        <div className="video-detail">
        
            <Button colorScheme='teal' size='md'>
                <Link to={'/'}>Back to home</Link>
            </Button>
            <iframe
            src={props.link}
            title="YouTube video player"  
            allowFullScreen
            className="video">
            </iframe>
                {/* <iframe src={props.link}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                /> */}
            <p className="video-title">{props.text}</p>
            <Product prod_photo={props.prod_photo}/>
        </div>
    )
}
