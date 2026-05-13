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
		{ label: 'Меню', icon: 'restaurant_menu', route: '/menu' },
		{ label: 'Доставка', icon: 'delivery_truck_speed', route: '/delivery' },
		{ label: 'Бронювання і контакти', icon: 'call', route: '/socials' },
		{ label: 'Події та банкети', icon: 'celebration', route: '/events' },
		{ label: 'Банкетний простір', icon: 'groups', route: '/rooms' },
		{ label: 'Галерея', icon: 'photo_library', route: '/gallery' },
		{ label: 'Про ресторан', icon: 'info', route: '/about' },
		{ label: 'Бізнес-ланчі', icon: 'local_offer', route: '/discounts' },
		{ label: 'Для сімей', icon: 'family_restroom', route: '/loyalty' },
		{ label: 'Питання гостей', icon: 'help', route: '/questions' },
	];
}
