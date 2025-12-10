import { type SchemaTypeDefinition } from 'sanity'

import { faqType } from './faqType'
import { newsType } from './newsType'
import { csrType } from './csrType'
import { careerType } from './careerType'
import { testimonialType } from './testimonialType'
import { galleryType } from './galleryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqType, newsType, csrType, careerType, testimonialType, galleryType],
}
