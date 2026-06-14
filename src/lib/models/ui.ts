export type SelectOption<T = string> = {
	value: T;
	label: string;
	disabled?: boolean;
};