import tensorflow as tf
import tensorflow_hub as hub

def load_model():
    return hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

def get_answer(question, context, model):
    embeddings = model([context, question])
    context_embedding = tf.reshape(embeddings[0], [1, -1])
    question_embedding = tf.reshape(embeddings[1], [1, -1])

    similarity = tf.matmul(question_embedding, context_embedding, transpose_b=True)

    index = tf.argmax(similarity).numpy()[0]

    # You can modify this based on your use case
    answer = context.split(' ')[index]

    return answer

def main():
    model = load_model()

    context = "The quick brown fox jumps over the lazy dog."
    question = "What does the fox jump over?"

    answer = get_answer(question, context, model)

    print(f"Question: {question}")
    print(f"Answer: {answer}")

if __name__ == "__main__":
    main()