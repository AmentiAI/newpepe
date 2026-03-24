import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | BPC-157 Stack — Peptide Protocol Questions',
  description: 'Contact BPC-157 Stack for questions about peptide protocols, stacks, or sourcing.',
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

export default function ContactPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400">
            Have questions about peptide protocols or stacks? Use the AI chat widget for instant answers,
            or contact us below.
          </p>
        </div>

        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-neon-green" />
            <h2 className="text-white font-bold">Contact Options</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-dark-700/50 rounded-xl p-4 border border-neon-green/10">
              <p className="text-neon-green text-sm font-semibold mb-1">AI Chat (Instant)</p>
              <p className="text-slate-400 text-sm">Use the chat widget in the bottom right for instant answers to protocol and dosing questions.</p>
            </div>
            <div className="bg-dark-700/50 rounded-xl p-4 border border-neon-green/10">
              <p className="text-neon-green text-sm font-semibold mb-1">Purchase Questions</p>
              <p className="text-slate-400 text-sm mb-2">For purchase, shipping, or product questions, visit our recommended supplier directly:</p>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-neon-green text-sm flex items-center gap-1 hover:underline"
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm mb-6">
            For the fastest answers, browse our comprehensive FAQ or use the AI chat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/faq" className="btn-secondary text-sm px-6 py-3">Browse FAQ</Link>
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
              View Peptides <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
