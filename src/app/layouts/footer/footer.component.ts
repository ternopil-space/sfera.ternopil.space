import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive, TranslateDirective],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	protected readonly navItems = [
		{ label: 'Навігація', icon: 'navigation', route: '/navigation', exact: true },
		{ label: 'Меню', icon: 'restaurant_menu', route: '/menu', exact: true },
		{ label: 'Банкети', icon: 'event', route: '/events', exact: true },
		{ label: 'Ланчі', icon: 'local_offer', route: '/discounts', exact: true },
		{ label: 'Контакти', icon: 'call', route: '/socials', exact: true },
	];
}
