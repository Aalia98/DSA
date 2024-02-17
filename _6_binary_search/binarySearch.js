function binarySearch(arr,target, n)
{
    let l = 0, r = n - 1, mid;
    while (l <= r)
    {
        mid = l + (r - l) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}