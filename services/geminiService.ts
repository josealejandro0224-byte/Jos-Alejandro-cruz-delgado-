import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateExplanation = async (tagName: string, context: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Actúa como un profesor experto y divertido de desarrollo web. 
    Explica la etiqueta HTML "${tagName}" en profundidad pero de forma sencilla para un principiante.
    Contexto adicional: ${context}.
    
    Estructura tu respuesta en formato HTML simple (usa <p>, <ul>, <li>, <strong>) pero NO incluyas un bloque de código principal, solo la explicación teórica y curiosidades. Hazlo breve, máximo 2 párrafos y una lista de consejos.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Lo siento, no pude generar una explicación en este momento.";
  } catch (error) {
    console.error("Error generating explanation:", error);
    return "Error al conectar con el asistente AI.";
  }
};

export const generateChallenge = async (tagName: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Genera un pequeño reto de código HTML creativo para la etiqueta "${tagName}".
    Dame solo el código HTML dentro de un bloque de código, y una breve instrucción de una línea antes.
    Que el ejemplo sea visualmente interesante (usa estilos inline simples).`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No se pudo generar el reto.";
  } catch (error) {
    console.error("Error generating challenge:", error);
    return "Error al conectar con AI.";
  }
};
