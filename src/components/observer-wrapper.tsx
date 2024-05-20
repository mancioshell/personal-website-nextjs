"use client";

import { useInView } from "react-intersection-observer";
import { Suspense, useState, useEffect, forwardRef, useCallback  } from "react";

interface ObserverWrapperProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onTrigger: () => void;
  initialInView?: boolean;
}

export default forwardRef(function ForwardedObserverWrapper(
  {
    children,
    fallback,
    onTrigger,
    initialInView = false,
  }: ObserverWrapperProps,
  elemRef
) {
  const { ref: inViewRef, inView, entry } = useInView({
    triggerOnce: false,
    threshold: [0.2, 0.8],
    initialInView: initialInView,
    onChange: (inView, entry) => {
      if (inView && entry.intersectionRatio >= 0.8) {
        onTrigger();
      }
    },
  });

  const setRefs = useCallback(
    (node: any) => {
      // @ts-ignore
      elemRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [elemRef, inViewRef],
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  return (
    <div ref={setRefs}>
      {isLoaded ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
});
