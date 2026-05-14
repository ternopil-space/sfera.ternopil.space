import { Routes } from '@angular/router';
import { buildRouteMeta } from './services/seo.utils';

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: buildRouteMeta('/'),
		},
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'menu',
		data: {
			meta: buildRouteMeta('/menu'),
		},
		loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
	},
	{
		path: 'about',
		data: {
			meta: buildRouteMeta('/about'),
		},
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
	},
	{
		path: 'favorites',
		data: {
			meta: buildRouteMeta('/favorites'),
		},
		loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
	},
	{
		path: 'navigation',
		data: {
			meta: buildRouteMeta('/navigation'),
		},
		loadComponent: () =>
			import('./pages/navigation/navigation.component').then((m) => m.NavigationComponent),
	},
	{
		path: 'gallery',
		data: {
			meta: buildRouteMeta('/gallery'),
		},
		loadComponent: () =>
			import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
	},
	{
		path: 'dish/:slug',
		loadComponent: () => import('./pages/dish/dish.component').then((m) => m.DishComponent),
	},
	{
		path: 'questions',
		data: {
			meta: buildRouteMeta('/questions'),
		},
		loadComponent: () =>
			import('./pages/questions/questions.component').then((m) => m.QuestionsComponent),
	},
	{
		path: 'reviews',
		data: {
			meta: buildRouteMeta('/reviews'),
		},
		loadComponent: () =>
			import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
	},
	{
		path: 'review/:slug',
		loadComponent: () =>
			import('./pages/review/review.component').then((m) => m.ReviewComponent),
	},
	{
		path: 'events',
		data: {
			meta: buildRouteMeta('/events'),
		},
		loadComponent: () =>
			import('./pages/events/events.component').then((m) => m.EventsComponent),
	},
	{
		path: 'event/:slug',
		loadComponent: () => import('./pages/event/event.component').then((m) => m.EventComponent),
	},
	{
		path: 'contacts',
		data: {
			meta: buildRouteMeta('/contacts'),
		},
		loadComponent: () =>
			import('./pages/socials/socials.component').then((m) => m.SocialsComponent),
	},
	{
		path: 'socials',
		redirectTo: 'contacts',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
