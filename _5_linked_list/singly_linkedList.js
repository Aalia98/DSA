class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add to end
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
        this.size++;
    }

    // print the list
    printList() {
        let current = this.head;
        let result = "";
        while(current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
        
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.printList();