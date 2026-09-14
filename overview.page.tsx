import * as React from 'react';

//import { Overview } from "./components/overview/Overview.tsx";
import { HomePage } from "./components/homepage/HomePage.tsx"

export const frontmatter = {
  seo: {
    title: 'Zuora Developer Center Overview - Zuora',
  },
  slug: '/overview',
};

export default function Page() {
  //return <Overview />;
  return <HomePage />;
}
