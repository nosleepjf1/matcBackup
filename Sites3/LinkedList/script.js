/**
 * Created by bobnweave on 11/10/16.
 */

function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
}

function find(item){
    var currentNode = this.head;
    while(currentNode.element != item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display(){
    var currNode = this.head;
    while(currNode.next != null){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}