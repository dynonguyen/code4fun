// 729. My Calendar I
// https://leetcode.com/problems/my-calendar-i/description/

class MyCalendar {
	constructor() {}

	private _bookedEvents: [number, number][] = [];

	book(start: number, end: number): boolean {
		for (const ev of this._bookedEvents) {
			if (start < ev[1] && end > ev[0]) return false;
		}

		this._bookedEvents.push([start, end]);

		return true;
	}
}
