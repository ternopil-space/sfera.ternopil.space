import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, TransferState } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CompanyService } from '../company/company.service';
import { DishCategoryService } from '../dish/dish-category.service';
import { DishService } from '../dish/dish.service';
import { EventService } from '../event/event.service';
import { ExhibitService } from '../exhibit/exhibit.service';
import { QuestionService } from '../question/question.service';
import { ReviewService } from '../review/review.service';
import { BOOTSTRAP_STATE_KEY } from './bootstrap.const';
import { BootstrapData } from './bootstrap.interface';

@Injectable({
	providedIn: 'root',
})
export class BootstrapService {
	private _platformId = inject(PLATFORM_ID);
	private _transferState = inject(TransferState);
	private _companyService = inject(CompanyService);
	private _dishCategoryService = inject(DishCategoryService);
	private _dishService = inject(DishService);
	private _eventService = inject(EventService);
	private _exhibitService = inject(ExhibitService);
	private _questionService = inject(QuestionService);
	private _reviewService = inject(ReviewService);

	async initialize() {
		const transferData = this._transferState.get<BootstrapData | null>(
			BOOTSTRAP_STATE_KEY,
			null,
		);

		if (transferData) {
			this._apply(transferData);

			if (isPlatformBrowser(this._platformId)) {
				this._transferState.remove(BOOTSTRAP_STATE_KEY);
				void this._refreshInBrowser();
			}

			return;
		}

		if (isPlatformServer(this._platformId)) {
			const data = await this._load();

			if (data) {
				this._transferState.set(BOOTSTRAP_STATE_KEY, data);
				this._apply(data);
			} else {
				this._eventService.finishLoading();
				this._exhibitService.finishLoading();
				this._questionService.finishLoading();
				this._reviewService.finishLoading();
			}

			return;
		}

		void this._refreshInBrowser();
	}

	private _apply(data: BootstrapData) {
		if (data.company) {
			this._companyService.setCompany(data.company);
		}

		this._dishCategoryService.setCategories(data.categories);

		if (Array.isArray(data.dishes) && data.dishes.length > 0) {
			this._dishService.dishes.set(data.dishes);
		}

		this._eventService.resolveEvents(data.events);
		this._exhibitService.resolveExhibits(data.exhibits);
		this._questionService.resolveQuestions(data.questions);
		this._reviewService.resolveReviews(data.reviews);
	}

	private async _refreshInBrowser() {
		const data = await this._load();

		if (data) {
			this._apply(data);
			return;
		}

		this._eventService.finishLoading();
		this._exhibitService.finishLoading();
		this._questionService.finishLoading();
		this._reviewService.finishLoading();
	}

	private async _load() {
		try {
			const response = await fetch(
				`${environment.apiUrl}/api/bootstrap/${environment.companyId}`,
			);

			if (!response.ok) {
				return null;
			}

			return (await response.json()) as BootstrapData;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}
