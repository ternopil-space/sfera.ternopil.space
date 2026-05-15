import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ArticleService } from '../../feature/article/article.service';
import { companyProfile } from '../../feature/company/company.data';
import { DiscountService } from '../../feature/discount/discount.service';
import { EventService } from '../../feature/event/event.service';
import { JobService } from '../../feature/job/job.service';
import { ProductService } from '../../feature/product/product.service';
import { ProfileService } from '../../feature/profile/profile.service';
import { QuestService } from '../../feature/quest/quest.service';
import { ReviewService } from '../../feature/review/review.service';

type FeaturePreview = {
	eyebrow: string;
	title: string;
	summary: string;
	meta?: string;
	itemRoute: string;
	allRoute: string;
	seeAllLabel: string;
	imageSrc?: string;
	imageAlt?: string;
};

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	private readonly _articleService = inject(ArticleService);
	private readonly _discountService = inject(DiscountService);
	private readonly _eventService = inject(EventService);
	private readonly _jobService = inject(JobService);
	private readonly _productService = inject(ProductService);
	private readonly _profileService = inject(ProfileService);
	private readonly _questService = inject(QuestService);
	private readonly _reviewService = inject(ReviewService);

	protected readonly company = companyProfile;
	protected readonly horecaHighlights = [
		'SfeRa працює щодня 11:00-23:00 на вулиці Білецькій, 33а у Тернополі.',
		'У меню є сніданки, бізнес-ланчі у будні 12:00-16:00, основні страви, морепродукти, десерти, дитяче меню, бар і коктейлі.',
		'Для весілля, дня народження, корпоративу, банкету або конференц-запиту краще одразу дзвонити і підтверджувати дату, місткість та меню.',
	];
	protected readonly todayItems = [
		{
			label: 'Сніданки',
			text: 'Сирники, англійський сніданок, скрембл з лососем або креветками у публічному меню.',
		},
		{
			label: 'Бізнес-ланч',
			text: 'Будні 12:00-16:00, склад і ціну перевіряйте у ChoiceQR.',
		},
		{
			label: 'Банкети',
			text: 'Весілля, дні народження, корпоративи і сімейні події за попереднім узгодженням.',
		},
	];
	protected readonly featurePreviews = computed(() => {
		const article = this._articleService.articles()[0];
		const discount = this._discountService.discounts()[0];
		const event = this._eventService.events()[0];
		const job = this._jobService.jobs()[0];
		const product = this._productService.products()[0];
		const profile = this._profileService.profiles()[0];
		const quest = this._questService.quests()[0];
		const review = this._reviewService.reviews()[0];
		const previews: Array<FeaturePreview | null> = [
			event
				? {
						eyebrow: 'Банкети',
						title: event.title,
						summary: event.summary,
						meta: event.format,
						itemRoute: `/event/${event.slug}`,
						allRoute: '/events',
						seeAllLabel: 'Всі події',
					}
				: null,
			discount
				? {
						eyebrow: 'Пропозиція',
						title: discount.title,
						summary: discount.summary,
						meta: discount.period,
						itemRoute: `/discount/${discount.slug}`,
						allRoute: '/discounts',
						seeAllLabel: 'Всі пропозиції',
					}
				: null,
			article
				? {
						eyebrow: 'Стаття',
						title: article.title,
						summary: article.summary,
						meta: article.category,
						itemRoute: `/article/${article.slug}`,
						allRoute: '/articles',
						seeAllLabel: 'Всі статті',
					}
				: null,
			product
				? {
						eyebrow: 'Пакети',
						title: product.title,
						summary: product.summary,
						meta: product.price,
						itemRoute: `/product/${product.slug}`,
						allRoute: '/products',
						seeAllLabel: 'Всі пакети',
					}
				: null,
			review
				? {
						eyebrow: 'Відгуки',
						title: review.title,
						summary: review.body,
						meta: review.author,
						itemRoute: `/review/${review.slug}`,
						allRoute: '/reviews',
						seeAllLabel: 'Всі відгуки',
					}
				: null,
			quest
				? {
						eyebrow: 'Сценарій',
						title: quest.title,
						summary: quest.summary,
						meta: quest.duration,
						itemRoute: `/quest/${quest.slug}`,
						allRoute: '/quests',
						seeAllLabel: 'Всі сценарії',
					}
				: null,
			job
				? {
						eyebrow: 'Команда',
						title: job.title,
						summary: job.summary,
						meta: job.location,
						itemRoute: `/job/${job.slug}`,
						allRoute: '/jobs',
						seeAllLabel: 'Всі вакансії',
					}
				: null,
			profile
				? {
						eyebrow: 'Роль',
						title: profile.name,
						summary: profile.description,
						meta: profile.role,
						itemRoute: `/profile/${profile.slug}`,
						allRoute: '/team',
						seeAllLabel: 'Вся команда',
						imageSrc: profile.image,
						imageAlt: profile.name,
					}
				: null,
		];

		return previews.filter((preview): preview is FeaturePreview => preview !== null);
	});

	constructor() {
		effect(() => {
			this._articleService.loadTranslations();
			this._discountService.loadTranslations();
			this._eventService.loadTranslations();
			this._jobService.loadTranslations();
			this._productService.loadTranslations();
			this._profileService.loadTranslations();
			this._questService.loadTranslations();
			this._reviewService.loadTranslations();
		});
	}
}
