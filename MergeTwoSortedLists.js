function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    // Criando nó "cabeça".
    let head = new ListNode(null);
    let prev = head;

    while(list1 && list2) {
        if (list1.val < list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if(!list1) { prev.next = list2 }
    if(!list2) { prev.next = list1 }

    return head.next;
}

const mergedList = mergeTwoLists([1,2,3], [2,3,4]);