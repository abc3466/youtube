import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import PlayVideo from './components/play_video/playVideo';
import VideoList from './components/video_list/vidoeList'

const App = ({youtube})=>{

    const [videos,setVideos] = useState([]);
    const [selectedVideo,setSeleted] = useState(null);


    useEffect(()=>{
        youtube.mostPopular()
        .then(videos => setVideos(videos))
    },[youtube])

    const handleLogoClick = ()=>{
        setSeleted(null);
        youtube.mostPopular()
        .then(videos => setVideos(videos))
    }
    
    const handleSearch = (query) =>{
        youtube.search(query)
        .then(video=>setVideos(video));
    }

    const handleSelected = (video)=>{
        setSeleted(video);
    }
    
    return(
        <>
            <Navbar
            onSearch={handleSearch}
            onLogoClick={handleLogoClick}
            />
            <section className={selectedVideo ? "flex":"display"}>
                {selectedVideo&&(
                    <div className={selectedVideo&&"screen"}>
                        <PlayVideo
                        video={selectedVideo}/>
                    </div>)}
                    <div
                        className={selectedVideo ? "grid" :""}>
                    <VideoList
                        videos={videos}
                        onPlayVideo={handleSelected}
                        select={selectedVideo}
                    />
                    </div>
            </section>
        </>
    )
}

export default App;
