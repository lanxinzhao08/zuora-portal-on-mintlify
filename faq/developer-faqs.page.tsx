import * as React from 'react';

import { Faq } from "../components/faq/Faq.tsx";

export const frontmatter = {
  seo: {
    title: 'Zuora Developer FAQs',
  },
  slug: '/faq',
};

export default function Page() {
  return <Faq />;
}
