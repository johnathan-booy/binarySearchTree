class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			this.size++;

			return;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.size++;
	}

	dequeue() {
		if (this.size === 0) new Error("Queue is empty");

		const oldHead = this.head;
		const newHead = this.head.next;

		if (newHead === null) {
			this.tail = null;
		}

		this.head = newHead;
		this.size--;

		return oldHead.val;
	}
}

module.exports = Queue;
