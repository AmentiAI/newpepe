import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { REVIEWER } from '@/lib/site';

interface Props {
  datePublished?: string;
  dateModified: string;
  reviewed?: boolean;
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export default function MedicalReviewByline({ datePublished, dateModified, reviewed = true }: Props) {
  return (
    <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50/60 px-5 py-4 text-sm">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
        <div className="flex-1">
          <p className="text-gray-900">
            <span className="font-semibold">By the </span>
            <Link href="/about#editorial-team" className="font-semibold text-emerald-700 hover:underline">
              BPC-157 Stack Editorial Team
            </Link>
            {reviewed && (
              <>
                {' · '}
                <span className="font-semibold">Medically reviewed by </span>
                <Link href="/about#alastair-d-burt" className="font-semibold text-emerald-700 hover:underline">
                  {REVIEWER.name}
                </Link>
                <span className="text-gray-700">, {REVIEWER.credentials.join(' ')}</span>
              </>
            )}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {datePublished && (
              <>
                Published {fmt(datePublished)}
                {' · '}
              </>
            )}
            Last updated {fmt(dateModified)}
            {reviewed && (
              <>
                {' · '}
                Last reviewed {fmt(dateModified)}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
