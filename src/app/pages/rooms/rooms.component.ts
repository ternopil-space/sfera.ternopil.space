import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoomService } from '@wawjs/ngx-horeca';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RoomBookingFormComponent } from '../../components/room-booking-form/room-booking-form.component';

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

@Component({
	imports: [NgOptimizedImage, RoomBookingFormComponent, RouterLink, TranslateDirective],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	private readonly _roomService = inject(RoomService);

	protected readonly amenities = [
		'Банкетна зала',
		'Літня тераса',
		'Вид на воду',
		'Wi-Fi',
		'Банкетне меню',
		'Сніданки',
		'Бізнес-ланчі',
		'Бар',
		'Події до 150 гостей',
		'Бронювання телефоном',
	];
	protected readonly loadingCards = [1, 2, 3];
	protected readonly rooms = this._roomService.rooms;
	protected readonly isLoading = this._roomService.isLoading;
	protected readonly hasRooms = computed(() => this.rooms().length > 0);

	protected readonly contactLinks: ContactLink[] = [
		{
			label: 'Call us',
			href: 'tel:+380688545635',
			description: '+380 68 854 56 35',
		},
		{
			label: 'Chat on Viber',
			href: 'tel:+380688545635',
			description: 'Швидке бронювання телефоном',
		},
		{
			label: 'Chat on Telegram',
			href: 'https://www.instagram.com/sfera.restaurant/',
			description: 'Instagram SfeRa',
		},
	];

	constructor() {
		effect(() => {
			this._roomService.loadTranslations();
		});
	}
}
