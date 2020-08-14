class Node {
    constructor(value) {
        // this is me!
        this.value = value;
        // I'm the node on the left
        this.leftNode = null;
        // I'm the node on the right
        this.rightNode = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode = (value) => {
        const node = new Node(value);

        if (!this.root) {
            // this will only be hit the first time we run it
            // this should be evaluated 2nd?
            this.root = node;
            return this;
        } else {
            this.addChild(this.root, node);
        }
    }

    addChild = (parentNode, newNode) => {
        if (newNode.value < parentNode.value) {
            // No nodes on the left
            if (!parentNode.leftNode) {
                parentNode.leftNode = new Node(newNode.value);
            } else {
                // if we have stuff on the left, then we
                // call ourselves again :( => recurssssssion....
                this.addChild(parentNode.leftNode, newNode);
            }
        } else if (newNode.value > parentNode.value) {
            if (!parentNode.rightNode) {
                parentNode.rightNode = new Node(newNode.value);
            } else {
                // if we have stuff on the left, then we
                // call ourselves again :( => recurssssssion....
                this.addChild(parentNode.rightNode, newNode);
            }
        }
    }

    // Left, Root, Right
    inOrder = () => {
        let visited = [];

        let traverse = (node) => {
            if (node.leftNode) { traverse(node.leftNode); }
            visited.push(node.value);
            console.log("I pushed: " + node.value);
            if (node.rightNode) { traverse(node.rightNode); }
        }

        traverse(this.root);

        return visited;

    }
}

const tree = new BinarySearchTree();

const runProject = () => {

    tree.addNode(10);//.addNode(12).addNode();
    tree.addNode(12);
    tree.addNode(8);
    tree.addNode(5);
    tree.addNode(6);
    tree.addNode(15);
    tree.addNode(19);

    console.log(tree.inOrder());

    console.log(tree);

    console.log(printTree(tree));
    // https://youtu.be/prAojMipVpw
}

/**
 * @description creates an tree object recursively
 * @notes tree should be a f(node) 
 * @example
 * console.log(toObject(tree)) //?
 */
const toObject = tree => {
    return tree((val, left, right) => {
        return {
            key: val,
            left: toObject(left),
            right: toObject(right)
        };
    }, () => 'Empty');
}


//thanks
const printTree = (tree) => {
    let parent = tree.root;

    const printNode = (node) => {
        if (node === null) return;
        
        console.log(node.value);
        parent = node;            

        if (node.leftNode)
            printNode(node.leftNode);

        if (parent.rightNode)
            printNode(parent.rightNode)        
    }

    printNode(tree.root);
}