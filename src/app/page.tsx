import Application from "@/components/application/Application";
import HomeView from "@/views/home/HomeView";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Biobank - Banco digital do Biopark',
  description: 'Boas vindas ao banco digital do Biopark!',
}
 
export default function Home() {
  return (
    <Application>
      <HomeView />
    </Application>
  );
}
