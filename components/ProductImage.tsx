'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FlaskConical } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function ProductImage({ src, alt, fill, priority, className, sizes }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <FlaskConical className="w-10 h-10 text-gray-300" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setErrored(true)}
    />
  );
}
