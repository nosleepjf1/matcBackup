function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function show(){
    return this.data;
}

function insert(){
    var n = new Node(data, null, null);
    if(this.root === null){
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if(current === null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
    if(node !== null){
        inOrder(node.left);
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(3);
nums.insert(93);
nums.insert(26);
nums.insert(13);
nums.insert(12);
nums.insert(28);
console.log(nums);