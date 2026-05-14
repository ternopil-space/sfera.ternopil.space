import { RenderMode, ServerRoute } from '@angular/ssr';
import { dishSlugs } from './feature/dish/dish.data';
import { eventSlugs } from './feature/event/event.service';
import { reviewSlugs } from './feature/review/review.service';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'dish/:slug',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return dishSlugs.map((slug) => ({ slug }));
		},
	},
	{
		path: 'event/:slug',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return eventSlugs.map((slug) => ({ slug }));
		},
	},
	{
		path: 'review/:slug',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return reviewSlugs.map((slug) => ({ slug }));
		},
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
