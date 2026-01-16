import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundMusic from "@/assets/background-music.mp3";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Try to autoplay (will work if browser allows)
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        // Autoplay was blocked, wait for user interaction
        console.log("Autoplay blocked, waiting for user interaction");
      }
    };

    attemptAutoplay();

    // Add click listener for first interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(console.error);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        if (!isPlaying) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMute}
      className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Volume2 className="h-5 w-5 text-primary animate-pulse" />
      )}
    </Button>
  );
};

export default BackgroundMusic;
