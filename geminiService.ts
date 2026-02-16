import { GoogleGenAI } from "@google/genai";

// Lazy initialization to prevent top-level crashes if process.env.API_KEY is undefined at load time
let aiInstance: GoogleGenAI | null = null;

function getAi() {
  if (!aiInstance) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      // We don't throw at top level, but we throw here when a function is called
      throw new Error("API Key is missing. Please configure the API_KEY environment variable in Vercel.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function refineProposalSection(sectionName: string, content: string) {
  try {
    const ai = getAi();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Refine o seguinte texto de uma proposta comercial para ser mais executivo, persuasivo e focado em ROI. 
      Seção: ${sectionName}
      Texto original: ${content}
      
      Mantenha o tom profissional em português brasileiro.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao refinar seção:", error);
    return content;
  }
}

export async function generateObjectionResponse(objection: string, proposalSummary: string) {
  try {
    const ai = getAi();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O cliente apresentou a seguinte objeção sobre uma proposta de plataforma de gestão de talentos: "${objection}".
      Resuma uma resposta estratégica e elegante baseada nesta proposta: ${proposalSummary}.`,
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);
    if (error instanceof Error && error.message.includes("API Key")) {
      return "O serviço de IA está aguardando configuração da chave de API. Por favor, verifique as variáveis de ambiente.";
    }
    return "Lamento, não consegui processar sua solicitação agora.";
  }
}