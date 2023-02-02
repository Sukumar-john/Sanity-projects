import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { media } from 'sanity-plugin-media'

export default defineConfig([{
  name: 'default',
  title: 'Staging',
  basePath: '/staging',
  projectId: 'kju6wx2j',
  dataset: 'staging',
  default: true,

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
},
{
  name: 'production',
  title: 'Production',

  basePath: '/production',
  projectId: 'kju6wx2j',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
},
])
