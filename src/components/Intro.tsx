import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, RotateCcw, X, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import introVideo from "@/assets/ai_darslar_intro.mp4";

interface IntroProps {
  onClose: () => void;
}

export function Intro({ onClose }: IntroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(19.5);
  const [needsUserInteractionForAudio, setNeedsUserInteractionForAudio] = useState(false);

  // Auto-play attempt on mount — plays continuously without pausing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try unmuted autoplay first
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy blocks unmuted autoplay, fall back to muted autoplay
          video.muted = true;
          setIsMuted(true);
          setNeedsUserInteractionForAudio(true);
          video.play().catch(() => {});
        });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    setNeedsUserInteractionForAudio(false);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsEnded(false);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (video.duration) {
      setDuration(video.duration);
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleVideoEnded = () => {
    setIsEnded(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AI Darslar video tanishtiruvi"
      className="fixed inset-0 z-[100] h-full w-full bg-black overflow-hidden select-none animate-in fade-in duration-300"
    >
      {/* Fullscreen Video element - completely covers the entire screen */}
      <video
        ref={videoRef}
        src={introVideo}
        playsInline
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="absolute inset-0 h-full w-full object-cover bg-black pointer-events-none"
      >
        <source src={introVideo} type="video/mp4" />
        <source src="/assets/aistudio/ai_darslar_intro_17a9f7c2.mp4" type="video/mp4" />
        Brauzeringiz video formatini qo‘llab-quvvatlamaydi.
      </video>

      {/* Top Header Bar floating over video */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold tracking-tight text-white sm:text-lg">
                Navoiy shahar 8-maktab
              </h2>
              <span className="hidden rounded-full bg-indigo-500/20 border border-indigo-400/30 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300 sm:inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> AI Darslar
              </span>
            </div>
            <p className="text-xs text-white/70">Platformaning rasmiy video tanishtiruvi</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {needsUserInteractionForAudio && isMuted && (
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition animate-pulse cursor-pointer"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Ovozni yoqish
            </button>
          )}

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition backdrop-blur-md cursor-pointer"
            title={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-red-300" />
            ) : (
              <Volume2 className="h-4 w-4 text-white" />
            )}
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:text-white cursor-pointer"
          >
            <span>O‘tkazib yuborish</span>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* End Screen Overlay when video finishes */}
      {isEnded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-t from-black/95 via-black/80 to-black/90 p-6 text-center backdrop-blur-sm animate-in fade-in duration-300">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 drop-shadow-[0_0_20px_rgba(99,102,241,0.8)] animate-bounce"
          />
          <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Kelajak tillari — bugun!
          </h3>
          <p className="mt-1 max-w-md text-sm text-white/80">
            Navoiy shahar 8-maktabning shaxsiy AI ustoz platformasiga xush kelibsiz.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-2.5 text-sm font-semibold text-white transition cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Qayta ko‘rish
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/40 transition hover:scale-105 cursor-pointer"
            >
              Platformaga kirish
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Video Control Bar at Bottom floating over video */}
      <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
        {/* Scrubber / Progress Bar */}
        <div
          className="relative mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition hover:h-2"
          onClick={handleSeek}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 relative"
            style={{ width: `${progress}%` }}
          >
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 -mr-1.5 rounded-full bg-white shadow" />
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between text-xs text-white/90">
          <div className="flex items-center gap-3">
            <button
              onClick={handleRestart}
              aria-label="Qayta boshlash"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              title="Qayta boshlash"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              title={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-red-300" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>

            <span className="font-mono text-white/70">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:scale-105 cursor-pointer"
            >
              Darslarga o‘tish
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
