class Reminder {
	name;
	reason;
	setAt;
	endsAt;
	user;
	channel;
	guild;
	token;
	sentMessage;

	constructor(data) {
		this.setAt = Date.now();
		this.token = token(10);
		this.name = `${data.user.id}_${this.token}`;
		this.sentMessage.delivered = false;

		for (const property of Object.keys(data)) {
			this[property] = data[property];
		}
	}

	ended() {
		return this.setAt < this.endsAt;
	}
}

module.exports = {
	Reminder
};
