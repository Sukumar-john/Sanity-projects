import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {table} from '@sanity/table'


export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '1xvjgb2o',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
