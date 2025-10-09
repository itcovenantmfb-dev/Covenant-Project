import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The category this FAQ belongs to (e.g., "Digital Banking", "Loans & Credit")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'text',
      description: 'The frequently asked question',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      description: 'The answer to the question',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this FAQ should appear within its category',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this FAQ should be displayed on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection
      return {
        title: title,
        subtitle: `${subtitle} ${isActive ? '✅' : '❌'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Category, Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})