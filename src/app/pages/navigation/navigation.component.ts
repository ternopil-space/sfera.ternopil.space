import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navItems = [
		{ label: 'Про SfeRa', icon: 'info', route: '/about' },
		{ label: 'Меню', icon: 'restaurant_menu', route: '/menu' },
		{ label: 'Події', icon: 'event', route: '/events' },
		{ label: 'Простори', icon: 'deck', route: '/rooms' },
		{ label: 'Контакти', icon: 'call', route: '/socials' },
		{ label: 'Галерея', icon: 'photo_library', route: '/gallery' },
		{ label: 'Пакети та сертифікати', icon: 'shopping_bag', route: '/products' },

		{ label: 'Бізнес-ланчі', icon: 'today', route: '/daily' },
		{ label: 'Сезонні позиції', icon: 'local_florist', route: '/seasonal' },

		{ label: 'Питання', icon: 'help', route: '/questions' },
		{ label: 'Правила', icon: 'gavel', route: '/rules' },

		{ label: 'Пропозиції', icon: 'local_offer', route: '/discounts' },
		{ label: 'Лояльність', icon: 'workspace_premium', route: '/loyalty' },

		{ label: 'Команда', icon: 'group', route: '/team' },
		{ label: 'Ролі та співпраця', icon: 'work', route: '/jobs' },

		{ label: 'Статті', icon: 'article', route: '/articles' },
		{ label: 'Соціальний доказ', icon: 'rate_review', route: '/reviews' },

		{ label: 'Планування події', icon: 'map', route: '/quests' },
		{ label: 'Сервіс для подій', icon: 'room_service', route: '/spa' },

		{ label: 'Доставка / самовивіз', icon: 'takeout_dining', route: '/takeaway' },
		{ label: 'Банкетні формати', icon: 'celebration', route: '/catering' },
	];
}
