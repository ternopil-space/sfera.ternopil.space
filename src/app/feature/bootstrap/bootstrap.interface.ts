import { Company } from '../company/company.interface';
import { Dish, DishCategory } from '../dish/dish.interface';
import { EventItem } from '../event/event.interface';
import { Exhibit } from '../exhibit/exhibit.interface';
import { Question } from '../question/question.interface';
import { Review } from '../review/review.interface';

export interface BootstrapData {
	company?: Company;
	categories?: DishCategory[] | null;
	dishes?: Dish[];
	events?: Partial<EventItem>[] | null;
	exhibits?: Partial<Exhibit>[] | null;
	questions?: Partial<Question>[] | null;
	reviews?: Partial<Review>[] | null;
}
