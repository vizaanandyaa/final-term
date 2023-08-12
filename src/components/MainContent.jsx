import React from "react";
import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { VideoThumbnail } from "./VideoThumbnail";

export function MainContent (){
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/getVideos')
        .then((r) => r.json())
        .then((item) => setDatas(item))
        .catch((error) => console.log('eror'))
    },[]);
    const tableTitles = ['Explore','Recommendation','New'];
    return(
        <>

            <Tabs variant='soft-rounded' colorScheme='green' m={10}>
                <TabList>
                    {tableTitles.map((tableTitle,index)=>{
                        return(
                            <Tab key={index}>{tableTitle}</Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="videos">
                            {datas.map((data,index)=>{
                                return(
                                    <VideoThumbnail id={data._id} img={data.img} key={index} title={data.title} tag=""/>
                                )
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="videos">
                            {datas.map((data,index)=>{
                                if(data.video_id % 2 === 0){
                                    return(
                                        <VideoThumbnail id={data._id} img={data.img} key={index} title={data.title} tag=""/>
                                    )
                                }
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="videos">
                            {datas.map((data,index)=>{
                                if(data.video_id % 3 === 0){
                                    return(
                                        <VideoThumbnail id={data._id} img={data.img} key={index} title={data.title} tag="new"/>
                                    )
                                }
                            })}
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs> 
        </>
    )
}
