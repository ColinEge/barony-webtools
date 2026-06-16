export type TooltipNode =
	| { type: 'text'; value: string }
	| { type: 'icon'; src: string; label?: string }
	| { type: 'break' };

export type TooltipSection = {
	title?: string;
	content: TooltipNode[];
};

export type TooltipData = {
	image?: string;
	title: string;
	sections: TooltipSection[];
};