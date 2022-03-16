import {useState, useEffect, useRef} from 'react';

const timerDelay = 300;

type VideoProps = {
  src: string;
  previewImage: string;
  isActive: boolean;
  isMuted: boolean;
  isLoop: boolean;
}

function Video ({src, previewImage, isActive, isMuted, isLoop}: VideoProps): JSX.Element {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () =>
        setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (videoRef.current !== null && isActive) {
      timer = setTimeout(() => videoRef.current?.play(), timerDelay);
    }
    if (videoRef.current !== null && !isActive) {
      videoRef.current.load();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <video
      src={src} className="player__video" poster={previewImage} muted={isMuted} loop={isLoop} ref={videoRef}
    >
    </video>
  );
}

export default Video;
