import Link from 'next/link';
import { getInterlinks } from '@/lib/interlinks';

interface Props {
  path: string;
  title?: string;
}

export default function InternalLinks({ path, title = 'Related Guides' }: Props) {
  const links = getInterlinks(path);
  if (links.length === 0) return null;

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-4">
          {title}
        </p>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <Link
              key={l.path}
              href={l.path}
              title={l.description}
              className="text-sm text-emerald-400 hover:text-gray-900 border border-emerald-500/20
                         hover:border-emerald-500/50 rounded-full px-4 py-2 transition-colors"
            >
              {l.anchor}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
