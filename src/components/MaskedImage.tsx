import { useEffect, useState } from 'preact/hooks';

type MaskedImageProps = {
  src: string;
  maskSrc: string;
  alt: string;
  className?: string;
}

export function MaskedImage({ src, maskSrc, alt, className, ...props }: MaskedImageProps) {
  const [maskUrl, setMaskUrl] = useState('');
  
  useEffect(() => {
    const cacheBuster = Date.now();

    setMaskUrl(`${maskSrc}?v=${cacheBuster}`);
  }, [maskSrc]);
  
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      style={{
        maskImage: `url(${maskUrl})`,
        WebkitMaskImage: `url(${maskUrl})`,
        maskSize: 'cover',
        WebkitMaskSize: 'cover',
        maskPosition: 'center',
        WebkitMaskPosition: 'center'
      }}
      loading="eager"
      fetchpriority="high"
      {...props}
    />
  );
}