/// <reference path='Message' />

'use strict';

module Models {
	export class UserMessage implements Message {
		private data: { name: string; message: string };

		constructor(data: { name: string; message: string }) {
			this.data = data;
		}

		get name(): string {
			return this.data.name;
		}

		get message(): string {
			return this.data.message;
		}
	}
}