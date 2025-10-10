import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Covenant MFB CMS')
    .items([
      S.documentTypeListItem('news').title('News & Blog Posts'),
      S.documentTypeListItem('career').title('Career Opportunities'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['news', 'career', 'faq', 'testimonial'].includes(item.getId()!),
      ),
    ])
