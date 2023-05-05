import video1 from './video/tiktokVid.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'
function Video(props, ref) {
    const videoReff= useRef()
    useImperativeHandle(ref,()=>({
        // Trả vể một object các method
        play(){
            videoReff.current.play()
        },
        pause(){
            videoReff.current.pause()
        }
    }))
    return (
        <div>
            <video
                ref={videoReff}
                src={video1}
                width={300}
                loop
            />
        </div>
    )
}
export default forwardRef(Video)