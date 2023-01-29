export interface MenuItem {
	name: string;
	dropdownItems?: string[];
}
export interface SlideTexts {
	mainText: string;
	subText: string;
	bgImagePath: string;
}

export interface SlideTextProps {
	mainText: string;
	subText: string;
	index: number;
	bgImagePath: string;
}
