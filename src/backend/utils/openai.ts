import {Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessage} from "openai"
import {Config} from '../../../config'


const configuration = new Configuration({
    apiKey: Config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const messages: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content: "asdas"
    }
]

async function createMessage(context: ChatCompletionRequestMessage[]) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [...messages, ...context],
        max_tokens: 200,
        temperature: 0.4
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

const contextGenerateActivity = "Ты бот который должен будет сгенерировать мероприятие в виде json файла \n" +
    "вот пример\n" +
    "{\n" +
    "            \"id\": \"7\",\n" +
    "            \"title\": \"Photography Workshop\",\n" +
    "            \"description\": \"A photography workshop for beginners.\",\n" +
    "            \"isActive\": false,\n" +
    "            url: \"./img/7.jpg\",\n" +
    "            createDate : \"31. 05. ср\"\n" +
    "        },\n" +
    "поле createDate и url оставь таким же везде\n" +
    "isActive везде true\n" +
    "а остальное ты должен будешь сгенерировать сам, по тегам которые тебе отправят"




