import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { companyProfile } from '../../feature/company/company.data';

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	protected readonly company = companyProfile;
	protected readonly phoneHref = `tel:${companyProfile.phone}`;
	protected readonly eventFormats = [
		{
			icon: 'favorite',
			title: 'Весілля',
			text: 'Банкетний простір, меню, посадка гостей, музика і декор за попереднім узгодженням.',
			route: '/event/vesillia',
		},
		{
			icon: 'celebration',
			title: 'Банкети та ювілеї',
			text: 'Формат для родинних свят, днів народження, хрестин, ювілеїв і великих вечерь.',
			route: '/event/bankety-i-iuvilei',
		},
		{
			icon: 'groups',
			title: 'Корпоративи і конференції',
			text: 'Ділові зустрічі, презентації, командні події, кава-брейки або ресторанна вечеря.',
			route: '/event/konferentsii',
		},
		{
			icon: 'family_restroom',
			title: 'Дитячі свята',
			text: 'Дитяче меню, дитяча кімната і зручний family-friendly формат для батьків.',
			route: '/event/dytiachi-sviata',
		},
	];
	protected readonly menuHighlights = [
		'Салат «Сфера» з тигровою креветкою, avocado, baby mozzarella і горіховим соусом',
		'Мʼясо з гриля: ребра в медовому соусі, шашлик, ribeye steak, filet mignon',
		'Риба і морепродукти: тосканські креветки, мідії у вершковому соусі, філе лосося',
		'Паста, супи, десерти, сирники, панакота, шоколадний фондан і дитяче меню',
	];
}
