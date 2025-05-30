const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  //brokers: ['kafka1:9092', 'kafka2:9092']
  brokers: ['localhost:9092']
})

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'quickstart-events',
    messages: [
      { value: 'Hello KafkaJS user from nodejs process!' },
    ],
  })

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)