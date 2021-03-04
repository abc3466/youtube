import React ,{memo} from 'react';
import styles from './video.module.css'

const Video = memo(
    ({video:{snippet},video,onPlayVideo,select}) => {

    const handleSelected = ()=>{
        onPlayVideo(video);
    }

    return (
        <li onClick={handleSelected} className={`${styles.video_item} ${select&&styles.small}`}>
            <img src={snippet.thumbnails.medium.url} alt="thumbnails"/>
            <div className={styles.text_box}>
            <p className={`${styles.title}`}>{`${snippet.title}`}</p>
            <p className={`${styles.channel}`}>{`${snippet.channelTitle}`}</p>
            </div>
        </li>
    );
});

export default Video;