import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/instrument-serif/latin-400-italic.css';
import './globals.css';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = {
 metadataBase: siteUrl ? new URL(siteUrl) : undefined,
 title: {default:'Aina Midget — Un esprit, plusieurs dimensions.',template:'%s — Aina Midget'},
 description:'Aina Midget à Antsirabe, Madagascar : UX/UI designer junior, UX writer, communication, gestion de projet et agronomie. Un parcours pluriel, une approche humaine.',
 alternates: siteUrl ? {canonical: '/'} : undefined,
 openGraph:{type:'website',locale:'fr_FR',siteName:'Aina Midget · Portfolio',title:'Aina Midget — Un esprit, plusieurs dimensions.',description:'La rigueur d’une scientifique. La sensibilité d’une créative. L’énergie d’une femme de terrain.'},
 twitter:{card:'summary_large_image'},robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="fr" data-scroll-behavior="smooth"><body><a className="skip-link" href="#contenu">Aller au contenu</a>{children}</body></html>;
}
