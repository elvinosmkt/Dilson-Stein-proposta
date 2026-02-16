
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function refineProposalSection(sectionName: string, content: string) {
  try {
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
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O cliente apresentou a seguinte objeção sobre uma proposta de plataforma de gestão de talentos: "${objection}".
      Resuma uma resposta estratégica e elegante baseada nesta proposta: ${proposalSummary}.`,
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);
    return "Lamento, não consegui processar sua solicitação agora.";
  }
}
