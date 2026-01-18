import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Playback interaction required", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 md:bottom-8 md:top-auto md:right-8 z-50">
      <audio ref={audioRef} loop>
        {/* 
           --- MUSIC SELECTION ---
           YouTube links DO NOT work here. You must use a direct link ending in .mp3.
           
           Here are some free romantic options you can use (uncomment the one you want):
           
           1. Soft Piano (Default):
           https://assets.mixkit.co/music/preview/mixkit-romantic-piano-melody-2766.mp3
           
           2. Acoustic Guitar (Warm):
           https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3
           
           3. Cinematic/Dreamy (Emotional):
           https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3
           
           4. Lo-Fi Chill:
           https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3
        */}
        <source src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-melody-2766.mp3" type="audio/mp3" />
      </audio>
      
      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md border border-rose-500/10 text-rose-200 hover:bg-rose-900/30 hover:border-rose-500/30 transition-all duration-500 shadow-lg shadow-rose-900/5 hover:shadow-rose-900/20"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <span className="absolute inset-0 rounded-full bg-rose-500/0 group-hover:bg-rose-500/5 transition-colors duration-500"></span>
        {isPlaying ? (
          <Pause size={16} className="md:w-5 md:h-5 relative z-10" />
        ) : (
          <Music size={16} className="md:w-5 md:h-5 relative z-10" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;