import type { Knex } from 'knex'

import { config as configKnex } from './src/database'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    ...configKnex,
  },
}

module.exports = config
