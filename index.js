const { bgWhite } = require("chalk");

module.exports = class ProgressBar {
	constructor() {
		this.total;
		this.current;
		this.bar_length = process.stdout.columns - 30;
	}

	init(total) {
		this.total = total;
		this.current = 0;
		this.update(this.current);
	}

	update(current) {
		this.current = current;
		const current_progress = this.current / this.total;
		this.draw(current_progress);
	}

	draw(current_progress) {
		const filled_bar_length = (current_progress * this.bar_length).toFixed(
			0
		);
		const empty_bar_length = this.bar_length - filled_bar_length;

		const filled_bar = bgWhite(" ".repeat(filled_bar_length));
		const empty_bar = "-".repeat(empty_bar_length);
		const percentage_progress = (current_progress * 100).toFixed(2);

		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(
			`Current progress: [${filled_bar}${empty_bar}] | ${percentage_progress}%`
		);
	}
};
