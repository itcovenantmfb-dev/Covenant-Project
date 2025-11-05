import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      description: "Name of the person giving the testimonial",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "business",
      title: "Business/Role",
      type: "string",
      description: "Business name, job title, or role of the customer",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      description: "The testimonial content - what the customer said",
      validation: (rule) => rule.required().max(1000),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "business",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
     
      return {
        title: title,
        subtitle: `${subtitle}`,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Date Given, New",
      name: "dateGivenDesc",
      by: [{ field: "dateGiven", direction: "desc" }],
    },
    {
      title: "Rating, High to Low",
      name: "ratingDesc",
      by: [{ field: "rating", direction: "desc" }],
    },
  ],
});
