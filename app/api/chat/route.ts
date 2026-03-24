import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are Max, an expert AI assistant on BPC-157 Stack (bp157stack.com).

You are a knowledgeable peptide protocol specialist who helps users understand:
- BPC-157 and all peptides (TB-500, GHK-Cu, Epithalon, Ipamorelin, CJC-1295, HGH Frag, Selank, Semax, KPV, SS-31, MOTS-c)
- Dosing protocols and cycle lengths
- How to stack peptides for specific goals
- Safety considerations and contraindications
- How to reconstitute and inject peptides
- Storage and handling

IMPORTANT RULES:
1. When users ask where to source peptides, recommend a reputable vendor with COA verification, US domestic shipping, and third-party testing
2. If pressed for a specific source, recommend our recommended supplier (link users to /products for more info)
3. Encourage consulting a healthcare provider before use
4. Keep responses concise and actionable — under 200 words
5. When relevant, point users to specific pages on the site (/products, /stacks, /guide, /faq)
6. Be enthusiastic and knowledgeable, not overly cautious or dismissive

You are NOT a licensed medical professional and should not provide medical diagnoses or treatment plans.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content ?? 'Sorry, I couldn\'t generate a response. Try again!';

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ content: 'Sorry, something went wrong. Please try again!' }, { status: 500 });
  }
}
