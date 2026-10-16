import type {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/site';
import {projects} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{return siteUrl?[{url:siteUrl,changeFrequency:'monthly',priority:1},...projects.map(p=>({url:`${siteUrl}/projets/${p.slug}`,changeFrequency:'monthly' as const,priority:.8}))]:[];}
