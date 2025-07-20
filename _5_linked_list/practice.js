class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    fromArr(arr) {
        for (let val of arr) {
            this.append(val);
        }
    }

    printList() {
        let curr = this.head;
        let result = "";
        while(curr) {
            result += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(result + "null")
    }

    traversal() {
        let curr = this.head;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    getLength() {
        let count = 0;
        let curr = this.head;
        while(curr) {
            count++;
            curr = curr.next;
        }
        return count;
    }

    search(val) {
        let curr = this.head;
        while(curr) {
            if(curr.data === val) return true;
            curr.next;
        }
        return false;
    }

    insertAtTheBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(index, data) {
        if(index < 0) return;
        let newNode = new Node(data);

        if(index === 0) {
            this.insertAtTheBeginning(data);
            return;
        }

        let curr = this.head;
        let prev = null;
        let count = 0;
        while(curr && count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        newNode.next = curr;
        if(prev) prev.next = newNode;
    }

    deleteHead(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    deleteTail(){
        if(!this.head || !this.head.next) {
            this.head = null;
            return;
        }
        let curr = this.head;
        while(curr.next.next) curr = curr.next;
        curr.next = null;
    }

    deleteValue(val) {
        if(!this.head) return;
        if(!this.head.data === val) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while(curr.next && curr.next.data !== val) {
            curr = curr.next;
        }
        if(curr.next) curr.next = curr.next.next;
    }
}