const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    const newNode = new Node(data);
    let currentNode = this.root;
    while (newNode) {
      if (data === newNode.data) {
        return true;
      }
      if (data < newNode.data) {
        newNode = newNode.left;
      } else {
        newNode = newNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.root;
    if (currentNode && currentNode.data === data) {
      return currentNode;
    }
    if (currentNode.left && currentNode.data > data) {
      return currentNode.left.find(data);
    }
    if (currentNode.right && currentNode.data < data) {
      return currentNode.right.find(data);
    }
    return null;
  }

  remove(data) {
    let currentNode = this.root;
    if (currentNode.data && currentNode.data === data) {
        if (!currentNode.left && !currentNode.right) {
          this.rootNode = null;
        } else if (!currentNode.left) {
          this.rootNode = currentNode.right.root();
        } else if (!currentNode.right) {
          this.rootNode = currentNode.left.root();
        } else {
          const minRightNode = currentNode.right.min();
          currentNode.right.remove(minRightNode);
          this.rootNode.data = minRightNode;
        }
        return;
      }
    if (currentNode.data > data) {
        currentNode.left.remove(data);
      } else {
        currentNode.right.remove(data);
      }
  }

  min() {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }
    if (!currentNode.left) {
      return currentNode.data;
    } else {
      if (!currentNode.left.root()) {
        this.rootNode.left = null;
        return currentNode.data;
      }
      return currentNode.left.min();
    }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};