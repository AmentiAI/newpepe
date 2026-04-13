'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Zap } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hey! I\'m Max, your BPC-157 peptide expert. Ask me anything about peptide protocols, dosing, stacking, or healing. What are you trying to optimize?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Try again!' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-cta flex items-center justify-center shadow-lg"
        aria-label="Open AI Chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] glass-card flex flex-col overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-neon-green/10">
            <div className="w-8 h-8 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-neon-green" />
            </div>
            <div>
              <p className="text-gray-900 text-sm font-semibold">Max — Peptide AI</p>
              <p className="text-neon-green text-xs">Online • BPC-157 Expert</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-neon-green text-dark-900 font-medium'
                      : 'bg-white text-gray-900 border border-neon-green/10'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neon-green/10 rounded-2xl px-4 py-2.5">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-neon-green rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-neon-green/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about BPC-157, dosing, stacks..."
              className="flex-1 bg-white border border-neon-green/20 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-slate-500 focus:outline-none focus:border-neon-green/50"
            />
            <button
              onClick={send}
              disabled={loading}
              className="w-9 h-9 rounded-xl bg-neon-green flex items-center justify-center shrink-0 hover:bg-neon-green/90 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-dark-900" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
