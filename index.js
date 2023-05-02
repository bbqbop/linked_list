const Node = function(value = null, nextNode = null){
    return {
    value: value,
    nextNode: nextNode
    }
}

const LinkedList = function(){
    this.head = {};
}

LinkedList.prototype = {
    prepend: function(value){
        this.head = Node(value, this.head.value ? this.head : null);
    },
    append: function(value){
        const lastNode = this.tail()
        lastNode.nextNode = Node(value)
    },
    size: function(sum = 0, node = this.head){
            if(!node.value) return sum
            if(node.nextNode == null) return ++sum;
            return this.size(++sum, node.nextNode);
    },
    head: function(){
        return this.head;
    },
    tail: function(node = this.head){
        if (node.nextNode != null){
            return this.tail(node.nextNode);
        } 
        return node;
    } 
}

const list = new LinkedList;
list.prepend('first Node');
list.prepend('new first Node');
list.append('new tail');
list.append('another new Tail');
console.log(JSON.stringify(list, undefined, 2));
console.log(list.size())