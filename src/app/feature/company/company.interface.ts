export interface Company {
	_id: string;
	name: string;
}

export interface SeoMetadata {
	title: string;
	description: string;
	keywords: string[];
	author: string;
	robots: string;
	image: string;
	type: string;
	twitterCard: string;
}

export interface SeoPageOverride extends Partial<SeoMetadata> {
	canonicalPath?: string;
}

export interface CompanyStructuredData {
	type: string;
	priceRange: string;
	servesCuisine: string;
	addressLocality: string;
	addressRegion: string;
	streetAddress: string;
	postalCode: string;
	addressCountry: string;
	openingHours: string;
	sameAs: string[];
}

export interface CompanyProfile extends Company {
	lang: string;
	locale: string;
	siteUrl: string;
	logo: string;
	phone: string;
	displayPhone: string;
	email: string;
	address: string;
	hours: string;
	mapUrl: string;
	socialLinks: {
		instagram?: string;
		facebook?: string;
	};
	defaultSeo: SeoMetadata;
	pageSeo: Record<string, SeoPageOverride>;
	structuredData: CompanyStructuredData;
}
