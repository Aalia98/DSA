class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // 1. Convert Array to Linked List
    fromArray(arr) {
        for(let val of arr) {
            this.append(val);
        }
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while(current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // 2. Traversal in Linked List
    traversal() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // 3. Length of a Linked List
    getLength() {
        let current = this.head;
        let count = 0;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // 4. Search an Element in Linked List
    search(value) {
        let current = this.head;
        while(current) {
            if(current.data === value) return 1;
            current = current.next;
        }
        return 0;
    }

    // 5. Insertion in Linked List
    // a) At the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // b) At the end (already done above in .append())

    // c) At a specific position
    insertAt(index, data) {
        if(index < 0) return;
        const newNode = new Node(data);

        if(index === 0) {
            this.insertAtBeginning(data);
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 0;

        while(current && count < index) {
            prev = current;
            current = current.next;
            count++;
        }
        newNode.next = current;
        if(prev) prev.next = newNode;
    }

    // 6. Deletion in Linked List
    // a) Delete at the beginning
    deleteHead() {
        if(!this.head) return;
        this.head = this.head.next;
    }

    // b) Delete at the end
    deleteTail() {
        if(!this.head || !this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next) current = current.next;
        current.next = null;
    }

    // c) Delete by value
    deleteByValue(value) {
        if(!this.head) return;

        if(this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next && current.next.data !== value) {
            current = current.next;
        }

        if(current.next) {
            current.next = current.next.next;
        }
    }
}

const list = new LinkedList();
list.fromArray([10, 20, 30]);
list.printList(); // 10 → 20 → 30 → null
