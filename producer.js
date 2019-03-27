#!/usr/bin/env node

'use strict';

const kafka = require("kafka-node");

// Define connection properties
let clientProperties={
    "kafkaHost":"localhost:9092",
};
let topic="first_topic";

// Perform connection
let client = new kafka.KafkaClient(clientProperties);
let producer = new kafka.Producer(client);

//
producer.on('ready', function () {
  let producerRecord={
    topic:topic,
    messages:"hello, world!"
  };
  producer.send([producerRecord], (err,result)=>{
    console.log(err || result);
    process.exit();
  });
});
