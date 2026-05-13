import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoomService } from '../../feature/room/room.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslateDirective],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	private readonly _roomService = inject(RoomService);

	protected readonly amenities = [
		'Банкети до 150 гостей',
		'Весілля та дні народження',
		'Корпоративи й team-building',
		'Випускні',
		'Банкетне меню',
		'Wi-Fi',
		'Літня тераса',
		'Дитяче меню',
		'Дитяча кімната',
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
			description: '+38 (068) 854 56 35',
		},
		{
			label: 'ChoiceQR меню',
			href: 'https://sfera.choiceqr.com',
			description: 'Актуальне меню',
		},
		{
			label: 'Контакти',
			href: '/socials',
			description: 'Адреса, години, соцмережі',
		},
	];

	constructor() {
		effect(() => {
			this._roomService.loadTranslations();
		});
	}
}
