import React, { useState }  from "react"
import OpenAI from "openai"


const FormAI = () => {

    const openai = new OpenAI({
        apiKey : "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",
        dangerouslyAllowBrowser: true,
    })

    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const AICLick = async () => {
        setLoading(true)
        try {
            const resp = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: prompt,
                max_tokens: 250
            })
            setResult(resp.choices[0].text)
        
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    return (
        <div className="d-flex flex-column">
            <textarea name="text_ai" label="your question is?" onChange={(e)=>setPrompt(e.target.value)}></textarea>

            <button text="AI" onClick={AICLick}>Submit</button>
            <p>{loading ? "AI is Loading...." : ""}</p>

            <p>Result : {result}</p>
        </div>
    )
}

export default FormAI;