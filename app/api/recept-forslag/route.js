import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request) {
  const { ingredienser } = await request.json();

  if (!ingredienser || !ingredienser.trim()) {
    return Response.json(
      { error: "Ange vad du har hemma först." },
      { status: 400 }
    );
  }

  const prompt = `Du är en svensk grillexpert. Baserat på dessa ingredienser/önskemål: "${ingredienser}", föreslå ETT grillrecept.
Svara ENDAST med giltig JSON i exakt detta format, utan markdown-formatering runt:
{
  "name": "Receptets namn",
  "desc": "Kort beskrivning, max en mening",
  "diet": "kott" | "vegetariskt" | "veganskt",
  "time": "t.ex. 25 min",
  "difficulty": "Lätt" | "Medel" | "Svår",
  "ingredients": ["ingrediens 1", "ingrediens 2"],
  "instructions": ["steg 1", "steg 2"]
}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const text = response.text.trim().replace(/^```json\s*|\s*```$/g, "");
    const recipe = JSON.parse(text);

    return Response.json({ recipe });
  } catch (error) {
    console.error("Gemini-fel:", error);
    return Response.json(
      { error: "Kunde inte generera ett recept just nu, försök igen." },
      { status: 500 }
    );
  }
}
