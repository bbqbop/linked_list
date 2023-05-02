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
    pop: function(curNode = this.head){
        if (curNode.nextNode.nextNode == null){
            return curNode.nextNode = null;
        }
        return this.pop(curNode.nextNode);
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
    },
    contains: function(value, curNode = this.head, curIdx = 0, find = false){
        if (curNode.value == value){
            return find ? curIdx : true;
        } 
        else if (curNode.nextNode == null){
            return false
        }
        return this.contains(value, curNode.nextNode, ++curIdx, find);
    }, 
    find: function(value){
        return this.contains(value, this.head, 0, true)
    }
}

const list = new LinkedList;

list.prepend('first Node');
list.prepend('new first Node');
list.append('new tail');
list.append('another new Tail');
console.log(JSON.stringify(list, undefined, 2));
// console.log(list.at(2));
// console.log(JSON.stringify(list.pop(), undefined, 2));
// console.log(list.size())
// console.log(list.contains('hallo!'), list.contains('new tail'));
console.log(list.find('new tail'), list.find('not in list'));
