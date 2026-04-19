import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'BPC-157 Stack — Peptide Protocols for Healing, Performance & Longevity',
    template: '%s | BPC-157 Stack',
  },
  description: 'Science-backed BPC-157 stacks and peptide protocols for injury healing, body composition, and anti-aging. 100+ studies. Expert-curated protocols for 2026.',
  keywords: [
    'BPC-157 stack', 'BPC-157 protocol', 'BPC157 stack', 'peptide stack guide',
    'BPC-157 healing stack', 'tb-500 bpc-157 stack', 'peptide stacks 2026',
    'bp157stack', 'bpc157stack', 'BPC-157 tb-500 protocol',
  ],
  authors: [{ name: 'BPC-157 Stack' }],
  openGraph: {
    title: 'BPC-157 Stack — Expert Peptide Protocols',
    description: 'The most comprehensive BPC-157 and peptide stack guide. Healing, anti-aging, and performance protocols backed by 100+ clinical studies.',
    type: 'website',
    url: 'https://www.bp157stack.com',
    siteName: 'BPC-157 Stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 Stack — Expert Peptide Protocols',
    description: 'Science-backed peptide stacks for healing, performance & longevity. 100+ studies.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.bp157stack.com'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'BPC-157 Stack',
                url: 'https://www.bp157stack.com',
                description: 'Expert peptide stack guides and protocols for healing, anti-aging, and performance.',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://www.bp157stack.com/products?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'BPC-157 Stack',
                url: 'https://www.bp157stack.com',
                description: 'Expert peptide stack guides and protocols for healing, anti-aging, and performance.',
                sameAs: ['https://www.bp157stack.com'],
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-200 min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
