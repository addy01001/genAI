import * as tf from '@tensorflow/tfjs-node';
import * as use from '@tensorflow-models/universal-sentence-encoder';

async function loadModel(): Promise<use.UniversalSentenceEncoder> {
    return await use.load();
}

async function getAnswer(
    question: string,
    context: string,
    model: use.UniversalSentenceEncoder
)  {
    const embeddings = await model.embed([context, question]);

    console.log(embeddings)
    // // Get the context and question embeddings
    // const contextEmbedding = tf.tidy(() => embeddings.slice([0, 0], [1, embeddings.shape[1]]));
    // const questionEmbedding = tf.tidy(() => embeddings.slice([1, 0], [1, embeddings.shape[1]]));

    // // Calculate the similarity
    // const similarity = tf.matMul(questionEmbedding, contextEmbedding.transpose());

    // // Get the index of the maximum similarity
    // const argmax = tf.argMax(similarity);
    // const index = (await argmax.data())[0];

    // // You can modify this based on your use case
    // const answer = context.split(' ')[index];

    // // Dispose of the temporary tensors created with tf.tidy
    // contextEmbedding.dispose();
    // questionEmbedding.dispose();

    // return answer;
}

async function main() {
    const model = await loadModel();

    const context = "The quick brown fox jumps over the lazy dog.";
    const question = "What does the fox jump over?";

    const answer = await getAnswer(question, context, model);

    console.log(`Question: ${question}`);
    console.log(`Answer: ${answer}`);
}

main();