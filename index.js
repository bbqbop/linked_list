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
    at: function(index, curIdx = 0, curNode = this.head){
        if (curIdx === index || curNode.nextNode == null){
            return curNode;
        }
        return this.at(index, ++curIdx, curNode.nextNode)
    },
    size: function(sum = 0, curNode = this.head){
            if(!curNode.value) return sum
            if(curNode.nextNode == null) return ++sum;
            return this.size(++sum, curNode.nextNode);
    },
    head: function(){
        return this.head;
    },
    tail: function(curNode = this.head){
        if (curNode.nextNode != null){
            return this.tail(curNode.nextNode);
        } 
        return curNode;
    } 
}

const list = new LinkedList;
list.prepend('first Node');
list.prepend('new first Node');
list.append('new tail');
list.append('another new Tail');
console.log(JSON.stringify(list, undefined, 2));
console.log(list.size())
console.log(list.at(1));