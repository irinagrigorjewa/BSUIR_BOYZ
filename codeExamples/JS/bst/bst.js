class BinarySearchTree {
    constructor (value) {
        this.root = new TreeNode()
    }
}

class TreeNode {
    constructor (value, leftChild = null, rightChild = null) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild =rightChild;
    }
}