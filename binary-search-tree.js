class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		const newNode = new Node(val);

		if (!this.root) {
			this.root = newNode;
		}

		let currentNode = this.root;

		while (currentNode !== newNode) {
			if (val > currentNode.val) {
				if (currentNode.right === null) {
					currentNode.right = newNode;
				}
				currentNode = currentNode.right;
			}
			if (val < currentNode.val) {
				if (currentNode.left === null) {
					currentNode.left = newNode;
				}
				currentNode = currentNode.left;
			}
		}

		return this;
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		const newNode = new Node(val);

		const insertRecursivelyHelper = (node) => {
			if (node === null) {
				return newNode;
			}
			if (val < node.val) {
				node.left = insertRecursivelyHelper(node.left);
			} else {
				node.right = insertRecursivelyHelper(node.right);
			}
			return node;
		};

		this.root = insertRecursivelyHelper(this.root);
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (!this.root) return;

		let currentNode = this.root;

		while (currentNode) {
			if (currentNode === null) return;
			if (currentNode.val === val) return currentNode;
			currentNode =
				val < currentNode.val ? currentNode.left : currentNode.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		function findRecursivelyHelper(node) {
			if (node === null) return;
			if (node.val === val) return node;
			if (node.val > val) return findRecursivelyHelper(node.left);
			if (node.val < val) return findRecursivelyHelper(node.right);
		}

		return findRecursivelyHelper(this.root);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		const arr = [];

		function dfsPreOrderHelper(node) {
			if (node === null) return;
			arr.push(node.val);
			dfsPreOrderHelper(node.left);
			dfsPreOrderHelper(node.right);
		}

		dfsPreOrderHelper(this.root);
		return arr;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		const arr = [];

		function dfsPostOrderHelper(node) {
			if (node === null) return;
			dfsPostOrderHelper(node.left);
			dfsPostOrderHelper(node.right);
			arr.push(node.val);
		}

		dfsPostOrderHelper(this.root);
		return arr;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
