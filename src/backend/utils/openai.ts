import {Configuration, OpenAIApi, ChatCompletionRequestMessage} from "openai"
import {Config} from '../../../config'


const configuration = new Configuration({
    apiKey: Config.KEY,
});
const openai = new OpenAIApi(configuration);

const contextGenerateActivity = `Ты бот который отправляет в ответ только json файл на русском языке. Ты можешь предложить как провести вечер, где прогуляться в Нижнем Новгорое, как провести время с друзьями,
чем заняться в умном кампусе в Нижнем Новгороде, что почитать и другое. Ты придумываешь зоголовок и описание мероприятия
отправь json файл, который содержит title и description. Всегда отвечай {"title": ... , "description": ...}. Не приветствуй пользователя, и не отвечай ему`


const messages: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content: contextGenerateActivity
    },
    {
        role: "user",
        content: "Создай json объект"
    }
]

export async function createMessage(context: ChatCompletionRequestMessage[]) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [...messages, ...context],
        max_tokens: 350,
        temperature: 0.9
    });
    const newContext = [
        ...context, completion.data.choices[0]
    ]
    const reply = completion.data.choices[0].message
    return {
        reply,
        newContext
    }
}





