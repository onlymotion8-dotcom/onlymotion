
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string) => {
  if (!API_KEY) return "AI 功能暫時無法使用。";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userPrompt,
    config: {
      systemInstruction: `
        你現在是「OnlyMotion 淳青影像工作室」的 AI 創意顧問。
        你的目標是協助造訪網站的客戶了解工作室的服務，並提供影像製作方面的創意靈感。
        
        關於 OnlyMotion:
        - 專長：實拍影像製作 (Live Action)、動態圖形與 2D/3D 動畫 (Animation)。
        - 風格：質感細膩、充滿動感 (Motion)、視覺敘事強。
        - 對象：品牌客戶、廣告代理商、個人創作者。
        
        回答規範：
        1. 使用繁體中文。
        2. 語氣專業、友善且充滿創意。
        3. 如果客戶詢問專案報價，請引導他們前往「聯絡我們」頁面填表。
        4. 鼓勵客戶瀏覽作品集。
      `,
      temperature: 0.7,
    },
  });

  try {
    const response = await model;
    return response.text || "抱歉，我現在無法回答這個問題。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "連線發生錯誤，請稍後再試。";
  }
};
