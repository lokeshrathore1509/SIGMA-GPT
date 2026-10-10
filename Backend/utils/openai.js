import "dotenv/config";

const getOpenAIAPIResponse = async(message) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey === "your_openai_api_key_here") {
        return "Please configure a valid API key in your Backend/.env file.";
    }

    // Auto-detect Groq Free Key vs OpenAI Key
    const isGroq = apiKey.startsWith("gsk_");
    const endpoint = isGroq 
        ? "https://api.groq.com/openai/v1/chat/completions"
        : "https://api.openai.com/v1/chat/completions";
    const model = isGroq ? "openai/gpt-oss-120b" : "gpt-4o-mini";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        if (data.error) {
            console.error("AI API Error:", data.error);
            return `AI API Error: ${data.error.message || "Failed to get response"}`;
        }
        return data.choices?.[0]?.message?.content || "No response generated.";
    } catch(err) {
        console.error("Error in getOpenAIAPIResponse:", err);
        return "Error connecting to AI service.";
    }
}

export default getOpenAIAPIResponse;