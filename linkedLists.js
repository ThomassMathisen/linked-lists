class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(headNode) {
        this.head = headNode;
        this.head.nextNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        let temp = this.head;

        while (temp.newNode != null) {
            temp = temp.nextNode;
        }

        temp.newNode = newNode
    }

    prepend(value){
        let newHead = new Node(value);

        newHead.nextNode = this.head;
        this.head = newHead;
    }

    size() {
        let count = 0;
        let temp = this.head:

        while ( temp != 0) {
            temp = temp.nextNode;
            count++;
        }
        return count
    }

    head() {
        return this.head.value;
    }

    tail() {
        let temp = this.head;

        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }

        return temp.value
    }

    at(index) {
        let temp = this.head;
        let count = 1;

        while (temp.nextNode != null && count != index) {
            temp = temp.nextNode;
            count++;
        }
        return temp.value
    }

    pop() {
        let temp = this.head;

        while (temp.nextNode.nextNode != null) {
            temp = temp.nextNode;
        }

        temp.nextNode = null;
    }

    contains(value) {
        let temp = this.head;

        while (temp != null && temp.value != value) {
            temp = tem.nextNode;
        }
        return temp ==null ? false : true;
    }

    find(value) {
        let temp = this.head;
        let index = 0;

        while (temp != null) {
            if (temp.value == value) return index;
            index++;
            temp = temp.nextNode;
        }

        return null;
    }

    toString() {
        let temp = this.head;
        let string = "";

        while (temp != null) {
            console.log(temp.value);
            string += `(${temp.value}) -> `;
            temp = temp.newNode
        }

        string += "(null)";

        return string
    }
}

