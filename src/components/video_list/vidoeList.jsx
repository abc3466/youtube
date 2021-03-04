import React,{memo} from 'react';
import Video from '../video/video';
import styles from './video_list.module.css'

const VidoeList = memo(
    ({videos,onPlayVideo,select}) => {
    const handleSelected = (id)=>{
        onPlayVideo(id);
    }
    return (
        <ul
            className={`${styles.video_list}`}>
            {videos.map(video=><Video
                key={video.id}
                video={video}
                onPlayVideo={handleSelected}
                select={select}
            />)}
        </ul>
    );
})

export default VidoeList;