'use strict';

const { get } = require('env-var');

module.exports = {
  NODE_ENV: get('NODE_ENV').default('dev').asEnum(['dev', 'prod']),
  LOG_LEVEL: get('LOG_LEVEL').asString(),

  CLUSTER_NAME: get('CLUSTER_NAME').required().example('Americas').asString(),

  KAFKA_BOOTSTRAP_URL: get('KAFKA_BOOTSTRAP_URL').required().asUrlString(),
  KAFKA_SVC_USERNAME: get('KAFKA_SVC_USERNAME').asString(),
  KAFKA_SVC_PASSWORD: get('KAFKA_SVC_PASSWORD').asString(),
  KAFKA_TOPIC_MATCHES: get('KAFKA_TOPIC_MATCHES')
    .default('match-updates')
    .asString()
};
