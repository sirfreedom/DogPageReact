import React, {useRef,useState} from 'react'


const PlaySongs = () => {


  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [SongList, setSongList] = useState
  (
    [
      {
        "title": "Bohemian Rhapsody",
        "author": "Queen",
        "id": "1",
        "time" : '00:00:40'
      },
      {
        "title": "Stairway to Heaven",
        "author": "Led Zeppelin",
        "id": "2",
        "time" : '00:00:30'
      },
      {
        "title": "Smells Like Teen Spirit",
        "author": "Nirvana",
        "id": "3",
        "time" : '00:00:23'
      },
      {
        "title": "Hotel California",
        "author": "Eagles",
        "id": "4",
        "time" : '00:00:35'
      }
    ]
  );


  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
}

const startTimer = (e) => {
  let { total, hours, minutes, seconds } = getTimeRemaining(e);
  if (total >= 0) {
      setTimer(
          (hours > 9 ? hours : '0' + hours) + ':' +
          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
      )
  }
}

const clearTimer = (e) => 
{
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
      startTimer(e);
  }, 1000)
  Ref.current = id;
}

const getDeadTime = () => {
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + 10);
  return deadline;
}

  const togglePlay = () => 
  {
    
    getDeadTime();

    if(playing)
    {
      setPlaying(false);
      setTimer(SongList[currentTrackIndex].time);
      startTimer();
    }

    if(!playing)
    {
      setPlaying(true);
       clearTimer();
       onClickReset();
    }

  };

  const prevTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
    setTimer(SongList[currentTrackIndex].time);
  };

  const nextTrack = () => 
  {
    if (currentTrackIndex < SongList.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
    setTimer(SongList[currentTrackIndex].time);
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
}


  return (
    <>
    <h2>{timer}</h2>
   <div className="player">
      <div className="player-track">
        <div className="track-title">{SongList[currentTrackIndex].title}</div>
        <div className="track-artist">{SongList[currentTrackIndex].artist}</div>
        <div className="track-time">{SongList[currentTrackIndex].time}</div>
      </div>
      <div className="player-controls">
        <button className="player-btn" onClick={prevTrack}>
          Prev
        </button>
        <button className="player-btn" onClick={togglePlay}>
          {playing ? 'Stop' : 'Play'}
        </button>
        <button className="player-btn" onClick={nextTrack}>
          Next
        </button>
      </div>
      <div className="music-list">
        {SongList.map((track, index) => (
          <div
            key={track.title}
            className=
            {
              index === currentTrackIndex ? 'music-list-item active' : 'music-list-item'
            }
            onClick={() => setCurrentTrackIndex(index)}
          >
            <div>{track.title}</div>
            <div>{track.author}</div>
            <div>{track.time} </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default PlaySongs;

