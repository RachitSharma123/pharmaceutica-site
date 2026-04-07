import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { contactConfig, navigationConfig, productsConfig, siteConfig } from '../config';

interface ChatMessage {
  id: number;
  role: 'assistant' | 'user';
  text: string;
}

interface KnowledgeIntent {
  keywords: string[];
  answer: string;
}

const contactLine = `For personalized help, call ${contactConfig.phone} or email ${contactConfig.email}.`;

const knowledgeIntents: KnowledgeIntent[] = [
  {
    keywords: ['product', 'products', 'medicine', 'medicines', 'catalog', 'category', 'categories', 'sku'],
    answer:
      'Our website showcases a broad pharmaceutical and hormonal portfolio across therapeutic categories, with grouped medicine variants for easier browsing.',
  },
  {
    keywords: ['quality', 'certification', 'gmp', 'iso', 'fda', 'standard'],
    answer:
      'We highlight a strong quality framework including certifications such as ISO 9001:2015 and WHO-GMP in the Quality Assurance section.',
  },
  {
    keywords: ['about', 'mission', 'story', 'company', 'who are you', 'pharmaceutica'],
    answer:
      'Pharmaceutica presents itself as a global-focused healthcare company dedicated to quality medicines and nutraceutical innovation for emerging markets.',
  },
  {
    keywords: ['research', 'innovation', 'patent', 'r&d'],
    answer:
      'The site highlights ongoing research and innovation efforts, including active patent progress and process improvement initiatives.',
  },
  {
    keywords: ['facility', 'facilities', 'manufacturing', 'global presence'],
    answer:
      'The website mentions three manufacturing facilities with global distribution focus and international quality compliance.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'call', 'support', 'help'],
    answer: 'You can directly reach our team for product, partnership, or manufacturing inquiries.',
  },
];

const buildAssistantReply = (question: string) => {
  const input = question.toLowerCase();

  const matchedIntent = knowledgeIntents.find((intent) =>
    intent.keywords.some((keyword) => input.includes(keyword))
  );

  if (matchedIntent) {
    return `${matchedIntent.answer} ${contactLine}`;
  }

  return `I can help with information from the ${siteConfig.title} website only (products, quality, facilities, research, and contact details). ${contactLine}`;
};

const starterPrompts = [
  'What categories do you supply?',
  'Tell me about quality certifications',
  'How can I contact your team?',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: `Hi! I am your ${navigationConfig.brandName} assistant. I can answer questions only about this website. ${contactLine}`,
    },
  ]);

  const canSend = draft.trim().length > 0;

  const sendMessage = (text: string) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      text: cleanText,
    };

    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      text: buildAssistantReply(cleanText),
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setDraft('');
  };

  const headerSubtitle = useMemo(
    () => `${productsConfig.tag} • Website-only assistant`,
    []
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(draft);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((state) => !state)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#7b4397] text-white shadow-xl hover:bg-[#663784] transition-colors"
        aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
      >
        {isOpen ? <X className="mx-auto" size={22} /> : <MessageCircle className="mx-auto" size={22} />}
      </button>

      {isOpen && (
        <section className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] border border-[#e8e8e8] bg-white shadow-2xl">
          <header className="px-4 py-3 border-b border-[#ececec] bg-[#fbf7fe]">
            <h3 className="text-sm font-semibold text-[#2f2f2f]">Pharmaceutica AI Assistant</h3>
            <p className="text-xs text-[#7b4397] mt-1">{headerSubtitle}</p>
          </header>

          <div className="p-4 h-[320px] overflow-y-auto space-y-3 bg-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-md px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'bg-[#f7f7f9] text-[#3a3a3a]'
                    : 'bg-[#7b4397] text-white ml-8'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="px-4 pb-3 flex flex-wrap gap-2 border-t border-[#ececec] pt-3">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="text-xs px-2 py-1 border border-[#e2d2eb] text-[#7b4397] hover:bg-[#f8f1fc] transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-[#ececec] flex items-center gap-2">
            <input
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about this website..."
              className="flex-1 border border-[#e7e7e7] px-3 py-2 text-sm focus:outline-none focus:border-[#7b4397]"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="h-10 w-10 inline-flex items-center justify-center bg-[#7b4397] text-white disabled:opacity-40"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>

          <p className="px-3 pb-3 text-[11px] text-[#888]">
            Limited to website knowledge. For direct assistance, call {contactConfig.phone} or email {contactConfig.email}.
          </p>
        </section>
      )}
    </>
  );
};

export default Chatbot;
