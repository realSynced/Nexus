import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Nexus',

  projectId: 'f5jherx8',
  dataset: 'nexdata',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
