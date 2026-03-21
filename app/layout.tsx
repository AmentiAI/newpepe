import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'BPC-157 Stack | #1 Peptide Protocols for Healing, Performance & Longevity',
  description: 'Science-backed BPC-157 stacks and peptide protocols for injury healing, body composition, and anti-aging. Curated from Apollo Peptide Sciences — the most trusted peptide source.',
  keywords: 'BPC-157, BPC 157, peptide stack, TB-500, healing peptide, BPC-157 protocol, peptide guide, Apollo Peptides, peptides',
  authors: [{ name: 'BPC-157 Stack' }],
  openGraph: {
    title: 'BPC-157 Stack | Expert Peptide Protocols',
    description: 'The most comprehensive BPC-157 and peptide stack guide. Healing, anti-aging, and performance protocols backed by clinical science.',
    type: 'website',
    url: 'https://bp157stack.com',
    siteName: 'BPC-157 Stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 Stack | Expert Peptide Protocols',
    description: 'Science-backed peptide stacks for healing, performance & longevity.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://bp157stack.com'),
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
                url: 'https://bp157stack.com',
                description: 'Expert peptide stack guides and protocols for healing, anti-aging, and performance.',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://bp157stack.com/products?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'BPC-157 Stack',
                url: 'https://bp157stack.com',
                description: 'Expert peptide stack guides and protocols for healing, anti-aging, and performance. Powered by Apollo Peptide Sciences.',
                sameAs: ['https://bp157stack.com'],
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark-900 text-slate-200 min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
