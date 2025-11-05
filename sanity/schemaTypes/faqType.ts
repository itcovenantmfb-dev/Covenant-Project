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
      description: 'Select the category this FAQ belongs to',
      options: {
        list: [
          { title: 'Questions Pertaining Digital Banking (E-Channels)', value: 'digital-banking' },
          { title: 'Questions Pertaining Loans/Investments', value: 'loans-investments' },
          { title: 'Questions Pertaining Accounts', value: 'accounts' },
          { title: 'General Questions', value: 'general' },
        ],
        layout: 'dropdown',
      },
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
   
  
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
   
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: `${subtitle}`,
      }
    },
  },
  orderings: [
    {
      title: 'Category, Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'desc' },
        { field: 'order', direction: 'desc' },
      ],
    },
  ],
})