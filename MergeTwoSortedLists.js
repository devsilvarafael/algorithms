function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(null); // Criando nó "cabeça" e ponteiro.
    let pointer = head;

    while(list1 && list2) { // Enquanto existirem valores em list1 e list2
        if(list1.val < list2.val) { // Ordenação
            pointer.next = list1; // Caso o valor de l1 seja menor que o l2, o ponteiro vai apontar pra esse elemento.
            list1 = list1.next; // Vai avançar para o próximo elemento da l1.
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }
        pointer = pointer.next; /* Quando alguma das listas chegar em null, é necessário que o ponteiro vá
                                    para o outro elemento da lista que ainda possuí algum valor. */
    };

    if(!list1) { pointer.next = list2 };
    if(!list2) { pointer.next = list1 };

    return head.next;
}

mergeTwoLists([1,3,5], [2,3,5]);