import { useState } from "react";

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = null,
  skeletonClassName = ""
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Default skeleton animation
  const defaultSkeleton = (
    <div className={`animate-pulse bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 ${skeletonClassName || className}`}>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
          <span className="text-blue-300/60 text-xs">Loading image...</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative" style={{ width: '100%', height: '100%' }}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10">
          {placeholder || defaultSkeleton}
        </div>
      )}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div className={`${className} bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center`}>
          <span className="text-blue-300/60 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithLoader;

