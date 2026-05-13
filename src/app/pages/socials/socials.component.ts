import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companyProfile } from '../../feature/company/company.data';

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	protected readonly company = companyProfile;
	protected readonly phoneHref = 'tel:+380688545635';
	protected readonly mapsHref =
		'https://www.google.com/maps/search/?api=1&query=SfeRa%20Restaurant%20Biletska%2033a%20Ternopil';
	protected readonly menuHref = 'https://sfera.choiceqr.com';
	protected readonly deliveryHref = 'https://korzyna.com/ternopil/sfera';
	protected readonly instagramHref = 'https://www.instagram.com/sfera.restaurant/';
	protected readonly facebookHref = 'https://www.facebook.com/sfera.restaurant';
}
