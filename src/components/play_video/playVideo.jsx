import React, { useRef, useState } from 'react';
import styles from './play_video.module.css'

const PlayVideo = ({video:{snippet},video}) => {
    const [videoHeight,setHeight] = useState(0);

    const divWidth = useRef()

    const handleHeight = ()=>{
        const height = setInterval(()=>{
            if(divWidth.current!=undefined&&divWidth.current.clientWidth>=divWidth.current.clientWidth){
                clearInterval(height);
                console.log(divWidth.current.clientWidth)
                return setHeight(divWidth.current.clientWidth/16*9)
            }
        },300);
        return height;
    }
    handleHeight();

    return (
        <div
            ref={divWidth}
            className={styles.play_video}>
            <iframe
                width=""
                height={videoHeight}
                title={snippet.title}
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

            <div className={styles.text_box}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
                <pre className={styles.info}>{snippet.description}</pre>
            </div>
        </div>
    );
};

export default PlayVideo;