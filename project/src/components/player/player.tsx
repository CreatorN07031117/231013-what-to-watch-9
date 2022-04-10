import {useCallback, useEffect, useRef, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import {VideoLoadingState} from '../const';
import Preloader from '../preloader/preloader';


function Player(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {films} = useAppSelector(({FILMS}) => FILMS);
  const filmInPlayer = films.find((film) => film.id === Number(params.id));

  const [isPlaying, setIsPlaying] = useState(true);
  const [inRunTime, setRunTime] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(VideoLoadingState.Unknown);


  const getDuration = (second: number) => {
    if(videoRef.current !== null){
      if(inRunTime !== null && isVideoLoaded === VideoLoadingState.Done){
        const hours = Math.floor(second/60/60);
        const minutes = Math.floor(second/60 - (hours*60));
        const seconds = second % 60;

        return hours === 0
          ? `${minutes}:${seconds}`
          : `${hours}:${minutes}:${seconds}`;
      }
    }
  };

  useEffect(() => {
    let intervalId:  NodeJS.Timer;
    if (isPlaying && videoRef.current !== null && isVideoLoaded === VideoLoadingState.Done) {
      intervalId = setInterval(() => {
        if (videoRef.current) {
          setRunTime(Math.round(videoRef.current.duration - videoRef.current.currentTime));
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, isVideoLoaded]);

  const getDurationProgrees = (second: number) => videoRef.current ? Math.round((videoRef.current.duration - second)/videoRef.current.duration * 100) : 0;

  const handlePlayingClick = () => {
    if (videoRef.current !== null) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleExit = useCallback((id) =>
    navigate(`/films/${id}`), [navigate]);

  useEffect(() => {
    const video = videoRef.current;

    if(video) {
      video.onplay = () => setIsPlaying(true);
      video.onpause = () => setIsPlaying(false);
      video.onwaiting = () => setIsVideoLoaded(VideoLoadingState.Pending);
      video.oncanplay = () => setIsVideoLoaded(VideoLoadingState.Done);
    }
  });


  return (
    <div className="player">
      {(isVideoLoaded === VideoLoadingState.Pending) && <Preloader />}
      <video
        src={filmInPlayer?.videoLink}
        className="player__video"
        poster={filmInPlayer?.previewImage}
        ref={videoRef}
        autoPlay
        data-testid="video"
      >
      </video>
      <button
        type="button"
        className="player__exit"
        onClick={() => handleExit(filmInPlayer?.id)}
        data-testid="exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getDurationProgrees(inRunTime)} max="100"></progress>
            <div
              className="player__toggler"
              style={{ left: `${getDurationProgrees(inRunTime)}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">-{getDuration(inRunTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayingClick}
            data-testid="play_control"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{filmInPlayer?.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={(evt: {currentTarget:  HTMLElement }) => {
              videoRef.current?.requestFullscreen();
            }}
            data-testid="fullscreen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );}

export default Player;
