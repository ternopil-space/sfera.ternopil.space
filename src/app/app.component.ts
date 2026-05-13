import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LanguageService, TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { filter } from 'rxjs';
import { environment } from '../environments/environment';
import { companyProfile } from './feature/company/company.data';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { CanonicalService } from './services/canonical.service';
import { ScrollService } from './services/scroll.service';

@Component({
	selector: 'app-root',
	imports: [RouterLink, RouterLinkActive, RouterOutlet, TopbarComponent, TranslateDirective],
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly _canonicalService = inject(CanonicalService);
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);
	private readonly _router = inject(Router);
	private readonly _scrollService = inject(ScrollService);
	private readonly _title = inject(Title);
	private readonly _translateService = inject(TranslateService);
	private readonly _navigationEnd = toSignal(
		this._router.events.pipe(filter((event) => event instanceof NavigationEnd)),
		{ initialValue: null },
	);

	protected readonly navItems = [
		{ label: 'Nav', icon: 'menu', route: '/navigation', exact: true },
		{ label: 'Меню', icon: 'restaurant_menu', route: '/menu', exact: true },
		{ label: 'Події', icon: 'celebration', route: '/events', exact: true },
		{ label: 'Доставка', icon: 'delivery_truck_speed', route: '/delivery', exact: true },
		{ label: 'Контакти', icon: 'call', route: '/socials', exact: true },
	];

	constructor() {
		this._canonicalService.initialize();
		this._scrollService.initialize();
		this._setRestaurantStructuredData();

		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? language;

			if (htmlLang) {
				this._document.documentElement.lang = htmlLang;
			}
		});

		effect(() => {
			this._navigationEnd();
			this._languageService.language();

			const path = _normalizeTitlePath(this._router.url);

			if (
				path.startsWith('/dish/') ||
				path.startsWith('/discount/') ||
				path.startsWith('/review/') ||
				path.startsWith('/room/')
			) {
				return;
			}

			const titleKey = _pageTitleKeys[path];
			const translatedTitle = titleKey
				? this._translateService.translate(titleKey)()
				: companyProfile.name;

			this._title.setTitle(
				translatedTitle === companyProfile.name
					? translatedTitle
					: `${translatedTitle} | ${companyProfile.name}`,
			);
		});
	}

	private _setRestaurantStructuredData() {
		const scriptId = 'restaurant-structured-data';
		const existingScript = this._document.getElementById(scriptId);
		const script = existingScript ?? this._document.createElement('script');

		if (!existingScript) {
			script.id = scriptId;
			script.setAttribute('type', 'application/ld+json');
			this._document.head.appendChild(script);
		}

		script.textContent = JSON.stringify({
			'@context': 'https://schema.org',
			'@type': companyProfile.structuredData.type,
			name: companyProfile.name,
			url: companyProfile.siteUrl,
			logo: `${companyProfile.siteUrl}${companyProfile.logo}`,
			image: `${companyProfile.siteUrl}${companyProfile.defaultSeo.image}`,
			telephone: '+380688545635',
			priceRange: companyProfile.structuredData.priceRange,
			servesCuisine: ['European cuisine', 'Ukrainian cuisine'],
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'вул. Білецька, 33а',
				addressLocality: companyProfile.structuredData.addressLocality,
				postalCode: '46000',
				addressCountry: companyProfile.structuredData.addressCountry,
			},
			openingHoursSpecification: [
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					opens: '11:00',
					closes: '23:00',
				},
			],
			sameAs: companyProfile.structuredData.sameAs,
		});
	}
}

const _pageTitleKeys: Record<string, string> = {
	'/': 'SfeRa Restaurant',
	'/menu': 'Меню SfeRa Restaurant',
	'/about': 'Про SfeRa Restaurant',
	'/spa': 'Spa',
	'/favorites': 'Favorites',
	'/rooms': 'Банкети SfeRa Restaurant',
	'/navigation': 'Навігація',
	'/gallery': 'Галерея SfeRa Restaurant',
	'/discounts': 'Бізнес-ланчі SfeRa Restaurant',
	'/articles': 'Articles',
	'/quests': 'Quests',
	'/reviews': 'Reviews',
	'/events': 'Події та банкети SfeRa Restaurant',
	'/products': 'Доставка SfeRa Restaurant',
	'/delivery': 'Доставка SfeRa Restaurant',
	'/jobs': 'Jobs',
	'/team': 'Team',
	'/socials': 'Контакти SfeRa Restaurant',
};

function _normalizeTitlePath(url: string): string {
	return (url.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/';
}
