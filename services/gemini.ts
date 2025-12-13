import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client strictly as per guidelines
// Note: In a real production app, ensure process.env.API_KEY is defined.
// For this demo, we assume the environment is set up correctly.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual oficial da BodeCoin, a criptomoeda do motoclube Bodes do Asfalto.
Seu tom é prestativo, direto e com um leve toque de camaradagem (brotherhood), mas sempre profissional sobre finanças.
Informações chave para responder:
- A BodeCoin une tradição do motoclube com inovação blockchain na rede Binance Smart Chain (BSC).
- Supply total: 100.000.000 BODE.
- Taxa de 2% em transações para Liquidez e Caridade.
- Objetivo: Financiar projetos sociais, apoiar a economia interna (mecânicas, eventos) e criar valor para a irmandade.
- Não dê conselhos financeiros de investimento, apenas explique o projeto.
`;

export const askBodesAssistant = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "Configuração de API Key necessária para consultar o oráculo digital.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Desculpe, tive uma falha na ignição. Tente novamente.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro ao conectar com o servidor. Verifique sua conexão.";
  }
};