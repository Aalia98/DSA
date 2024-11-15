// TODO: Using Brute Force

function kthLargestSum(arr, N, K)
{
    let result=[];
 
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = i; j < N; j++) {
            sum += arr[j];
            result.push(sum);
        }
    }
 
    result.sort();
    result.reverse();
 
    return result[K - 1];
}

    let a = [20, -5, -1 ];
    let N = a.length;
    let K = 3;
    console.log(kthLargestSum(a, N, K));

// TODO: Using Min-Heap

function kthLargestSum(arr, n, k) {

    let sum = new Array(n + 1);
    sum[0] = 0;
    sum[1] = arr[0];
    for (let i = 2; i <= n; i++)
        sum[i] = sum[i - 1] + arr[i - 1];

    let Q = [];
    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n; j++) {
            let x = sum[j] - sum[i - 1];

            if (Q.length < k)
                Q.push(x);

            else {
                Q.sort();
                if (Q[0] < x) {
                    Q.pop();
                    Q.push(x);
                }
            }

            Q.sort();
        }
    }

    return Q[0];
}

let x = [10, -10, 20, -40];
let n = x.length;
let k = 6;

console.log(kthLargestSum(x, n, k));

// TODO: Using Prefix Sum and Sorting

function kthLargestSum(arr, k) {
    let n = arr.length;

    let prefixSum = new Array(n + 1).fill(0);
    prefixSum[0] = 0;
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    let subarraySums = [];
    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            subarraySums.push(prefixSum[j] - prefixSum[i]);
        }
    }
    subarraySums.sort((a, b) => b - a);

    return subarraySums[k - 1];
}

let arr = [10, -10, 20, -40];
let k1 = 6;
console.log(kthLargestSum(arr, k1)); 

// TODO: Using Sliding Window with Min-Heap

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return root;
    }

    peek() {
        return this.heap[0];
    }

    _heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown(index) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}

function kthLargestSum(arr, k) {
    let n = arr.length;
    let prefixSum = new Array(n + 1).fill(0);
    let minHeap = new MinHeap();

    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            if (minHeap.heap.length < k) {
                minHeap.push(currentSum);
            } else if (currentSum > minHeap.peek()) {
                minHeap.pop();
                minHeap.push(currentSum);
            }
        }
    }
    return minHeap.peek();
}

let arr1 = [10, -10, 20, -40];
let k2 = 6;
console.log(kthLargestSum(arr1, k2));

