import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companyProfile } from '../../feature/company/company.data';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	protected readonly company = companyProfile;
	protected readonly phoneHref = 'tel:+380688545635';
	protected readonly menuHref = 'https://sfera.choiceqr.com';
	protected readonly deliveryHref = 'https://korzyna.com/ternopil/sfera';
	protected readonly highlights = [
		'Європейська та українська кухня, сніданки й будні бізнес-ланчі з 12:00 до 16:00.',
		'Банкети, весілля, корпоративи, дні народження, випускні та team-building до 150 гостей.',
		'Сімейний формат із дитячим меню, дитячою кімнатою, доставкою, take away і терасою.',
	];
	protected readonly menuGroups = [
		'Сніданки',
		'Бізнес-ланчі',
		'Основне меню',
		'Бар',
		'Банкетне меню',
	];
}
