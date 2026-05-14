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
		{ label: 'Події', icon: 'celebration', route: '/events' },
		{ label: 'Галерея', icon: 'photo_library', route: '/gallery' },
		{ label: 'Контакти', icon: 'call', route: '/contacts' },
		{ label: 'Про SfeRa', icon: 'info', route: '/about' },
		{ label: 'Відгуки', icon: 'rate_review', route: '/reviews' },
		{ label: 'FAQ', icon: 'help', route: '/questions' },
		{ label: 'Доставка', icon: 'delivery_dining', route: '/contacts' },
	];
}
