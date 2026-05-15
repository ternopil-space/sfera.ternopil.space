import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [NgTemplateOutlet, RouterLink, TranslateDirective],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navItems = [
		{ label: 'Меню', icon: 'restaurant_menu', route: '/menu' },
		{ label: 'Події та банкети', icon: 'event', route: '/events' },
		{ label: 'Пропозиції', icon: 'local_offer', route: '/discounts' },
		{ label: 'Про ресторан', icon: 'info', route: '/about' },
		{ label: 'Контакти', icon: 'call', route: '/socials' },
		{ label: 'Галерея', icon: 'photo_library', route: '/gallery' },
		{ label: 'Лояльність', icon: 'workspace_premium', route: '/loyalty' },
		{ label: 'Пакети і подарунки', icon: 'redeem', route: '/products' },
		{ label: 'FAQ', icon: 'help', route: '/questions' },
		{ label: 'Правила', icon: 'gavel', route: '/rules' },
		{ label: 'Статті', icon: 'article', route: '/articles' },
		{ label: 'Відгуки', icon: 'rate_review', route: '/reviews' },
		{ label: 'Сценарії візиту', icon: 'map', route: '/quests' },
		{ label: 'Команда', icon: 'group', route: '/team' },
		{ label: 'Вакансії', icon: 'work', route: '/jobs' },
		{ label: 'ChoiceQR меню', icon: 'open_in_new', route: 'https://sfera.choiceqr.com/online-menu' },
		{ label: 'Instagram', icon: 'alternate_email', route: 'https://www.instagram.com/sfera.restaurant/' },
	];
}
