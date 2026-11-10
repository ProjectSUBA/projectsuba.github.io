import Image from 'next/image';
import { photos } from '@/lib/photos';

/**
 * A photograph with its caption and credit, like a figure in a field report.
 *
 * Looks the photo up by `id` in src/lib/photos.ts. When no photo has been added
 * yet it shows an honest empty frame, marked with crop marks, that says so.
 * `caption` describes what the photograph will show.
 */
export function FieldPhoto({
  id,
  caption,
  aspect = '3/2',
  priority = false,
  className = '',
}: {
  id: string;
  caption: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}) {
  const photo = photos[id];

  if (photo) {
    return (
      <figure className={className}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="mt-2 text-[0.8rem] leading-snug text-suba-muted">
          {caption} <span className="label-mono ml-1 whitespace-nowrap">{photo.credit}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div
        className="relative flex items-center justify-center border border-ink/30 bg-paper-deep"
        style={{ aspectRatio: aspect }}
        role="img"
        aria-label={`Photograph to be added: ${caption}`}
      >
        {/* Crop marks in the four corners */}
        <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-ink/50" aria-hidden="true" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-ink/50" aria-hidden="true" />
        <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-ink/50" aria-hidden="true" />
        <span className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-ink/50" aria-hidden="true" />
        <span className="label-mono text-suba-muted">Photograph to be added</span>
      </div>
      <figcaption className="mt-2 text-[0.8rem] leading-snug text-suba-muted">{caption}</figcaption>
    </figure>
  );
}
