import React, {useState, useEffect} from 'react'

const buttonLabels = ['Not replaying', 'Replaying all', 'Replaying one'];




const PlaySongs = () => {

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [SongList, setSongList] = useState
  (
    [
      {
        "title": "Bohemian Rhapsody",
        "author": "Queen",
        "id": "1",
        "time" : 0.05
      },
      {
        "title": "Stairway to Heaven",
        "author": "Led Zeppelin",
        "id": "2",
        "time" : 0.03
      },
      {
        "title": "Smells Like Teen Spirit",
        "author": "Nirvana",
        "id": "3",
        "time" : 0.03
      },
      {
        "title": "Hotel California",
        "author": "Eagles",
        "id": "4",
        "time" : 0.03
      }
    ]
  );

  const currentTrack = SongList[currentTrackIndex];

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const prevTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const nextTrack = () => {
    if (currentTrackIndex < SongList.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  return (
    <>
   <div className="player">
      <div className="player-track">
        <div className="track-title">{currentTrack.title}</div>
        <div className="track-artist">{currentTrack.artist}</div>
      </div>
      <div className="player-controls">
        <button className="player-btn" onClick={prevTrack}>
          Prev
        </button>
        <button className="player-btn" onClick={togglePlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="player-btn" onClick={nextTrack}>
          Next
        </button>
      </div>
      <div className="music-list">
        {SongList.map((track, index) => (
          <div
            key={track.title}
            className={
              index === currentTrackIndex
                ? 'music-list-item active'
                : 'music-list-item'
            }
            onClick={() => setCurrentTrackIndex(index)}
          >
            <div>{track.title}</div>
            <div>{track.author}</div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default PlaySongs;

