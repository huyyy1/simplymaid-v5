/**
 * Video optimization utilities
 */

interface VideoOptimizationOptions {
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsinline?: boolean;
  preload?: "none" | "metadata" | "auto";
  poster?: string;
  width?: number;
  height?: number;
}

export const videoOptimization = {
  /**
   * Get optimized video props
   */
  getOptimizedVideoProps: (src: string, options: VideoOptimizationOptions = {}) => {
    const {
      autoplay = true,
      muted = true,
      loop = true,
      playsinline = true,
      preload = "metadata",
      poster,
      width,
      height,
    } = options;

    return {
      src,
      autoPlay: autoplay,
      muted,
      loop,
      playsInline: playsinline,
      preload,
      poster,
      width,
      height,
      className: "w-full h-full object-cover",
    };
  },

  /**
   * Lazy load video with IntersectionObserver
   */
  lazyLoadVideo: (
    videoElement: HTMLVideoElement,
    options: { threshold?: number; rootMargin?: string } = {}
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load video when in viewport
            if (videoElement.dataset.src) {
              videoElement.src = videoElement.dataset.src;
              delete videoElement.dataset.src;
            }
            observer.disconnect();
          }
        });
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || "50px",
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  },

  /**
   * Preload video metadata
   */
  preloadVideoMetadata: (src: string) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = src;
  },
};