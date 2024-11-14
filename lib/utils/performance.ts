/**
 * Performance utilities for optimizing application performance
 */

// Debounce function calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean; maxWait?: number } = {}
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any = null;
  let lastCallTime: number | null = null;
  let lastInvokeTime = 0;

  const leading = options.leading ?? false;
  const trailing = options.trailing ?? true;
  const maxWait = options.maxWait;

  function invokeFunc() {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = null;
    lastInvokeTime = Date.now();
    if (args) func.apply(thisArg, args);
  }

  function startTimer(pendingFunc: () => void, wait: number) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(pendingFunc, wait);
  }

  return function executedFunction(this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (!timeout && leading) {
        lastInvokeTime = time;
        startTimer(timerExpired, wait);
        return invokeFunc();
      }
      if (maxWait) {
        startTimer(maxDelayed, maxWait);
      }
    }
    if (!timeout && trailing) {
      startTimer(timerExpired, wait);
    }
  };

  function shouldInvoke(time: number) {
    const timeSinceLastCall = lastCallTime ? time - lastCallTime : 0;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      !lastCallTime ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait && timeSinceLastInvoke >= maxWait)
    );
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return maxDelayed();
    }
    startTimer(timerExpired, remainingWait(time));
  }

  function maxDelayed() {
    if (timeout) clearTimeout(timeout);
    timeout = null;
    if (trailing && lastArgs) {
      return invokeFunc();
    }
    lastArgs = lastThis = null;
    return undefined;
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxWait
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }
}

// RAF throttle for smooth animations
export function rafThrottle<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let ticking = false;
  let lastArgs: Parameters<T> | null = null;

  return (...args: Parameters<T>) => {
    lastArgs = args;

    if (!ticking) {
      requestAnimationFrame(() => {
        if (lastArgs) func(...lastArgs);
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Measure component render time
export function measureRenderTime(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const start = performance.now();
    const result = <Component {...props} />;
    const end = performance.now();

    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] ${Component.name} render time: ${(end - start).toFixed(2)}ms`);
    }

    return result;
  };
}

// Lazy load images with IntersectionObserver
export function lazyLoadImage(
  src: string,
  options: { threshold?: number; rootMargin?: string } = {}
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            observer.disconnect();
          }
        });
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || "50px",
      }
    );

    observer.observe(img);

    img.onload = () => {
      observer.disconnect();
      resolve(img);
    };
    img.onerror = reject;
  });
}

// Check if element is in viewport with IntersectionObserver
export function observeIntersection(
  element: HTMLElement,
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): () => void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);

  observer.observe(element);

  return () => observer.disconnect();
}

// Preload critical resources
export function preloadResources(resources: string[]) {
  resources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;
    link.as = resource.endsWith(".js")
      ? "script"
      : resource.endsWith(".css")
      ? "style"
      : "image";
    document.head.appendChild(link);
  });
}

// Measure time to interactive
export function measureTimeToInteractive(): Promise<number> {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve(performance.now());
      return;
    }

    window.addEventListener(
      "load",
      () => {
        requestIdleCallback(() => {
          resolve(performance.now());
        });
      },
      { once: true }
    );
  });
}