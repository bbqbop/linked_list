const Node = function(value = null, nextNode = null){
    return {
    value: value,
    nextNode: nextNode
    }
}

const LinkedList = function(){
    this.head = null;
}
LinkedList.prototype = {
    prepend: function(value){
        this.head = Node(value, this.head);
    },
    append: function(value){
        const lastNode = this.tail()
        // if list is empty:
        if (lastNode == null){
            return this.prepend(value);
        }
        lastNode.nextNode = Node(value)
    },
    pop: function(curNode = this.head){
        if (curNode.nextNode.nextNode == null){
            const nodeToRemove = curNode.nextNode;
            curNode.nextNode = null;
            return nodeToRemove;
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
        if (curNode == null || curNode.nextNode == null){
            return curNode;
        }
        if (curNode.nextNode != null){
            return this.tail(curNode.nextNode);
        } 
    },
    contains: function(value, curNode = this.head, curIdx = 0, find = false){
        if (curNode.value == value){
            return find ? curIdx : true;
        } 
        else if (curNode.nextNode == null){
            return find ? null : false;
        }
        return this.contains(value, curNode.nextNode, ++curIdx, find);
    }, 
    find: function(value){
        return this.contains(value, this.head, 0, true)
    },
    toArray: function(curNode = this.head, array = []){
        array.push(curNode.value);
        if(curNode.nextNode == null){
            return array
        }
        return this.toArray(curNode.nextNode, array);
    },
    toString: function(){
        const array = this.toArray();
        let string = '';
        array.forEach( node => string += `( ${node} ) -> `);
        return string += null;
    },
    insertAt: function(value, index, curNode = this.head, curIdx = 0){
        if (index == 0){
            return this.prepend(value);
        }
        if (index == curIdx + 1 || curNode.nextNode == null){
            return curNode.nextNode = Node(value, curNode.nextNode);
        }
        return this.insertAt(value, index, curNode.nextNode, ++curIdx)
    },
    removeAt: function(index, curNode = this.head, curIdx = 0){
        if (index == curIdx + 1){
            const nodeToRemove = curNode.nextNode;
            curNode.nextNode = curNode.nextNode.nextNode;
            return nodeToRemove;
        }
        if (curNode.nextNode == null){
            return -1
        }
        return this.removeAt(index, curNode.nextNode, ++curIdx)
    }
}

const list = new LinkedList;

list.prepend('initial Node');
list.prepend('new first Node');
list.append('first append');
list.append('second append');
console.log(JSON.stringify(list, undefined, 2));

// TEST METHODS

// .at
    // console.log(list.at(2));
// .pop
    // console.log(list.pop())
    // console.log(JSON.stringify(list, undefined, 2));
// .size
    // console.log(list.size())
// .contains
    // console.log(list.contains('hallo!'), list.contains('first append'));
// .find
    // console.log(list.find('second append'), list.find('not in list'));
// .toArray
    // console.log(list.toArray());
// .toString
    // console.log(list.toString());
// // .insertAt
//     list.insertAt('INSERTED AT IDX 2', 2);
//     console.log(JSON.stringify(list, undefined, 2))
// .removeAt
    // console.log(list.removeAt(2));
    // console.log(JSON.stringify(list, undefined, 2))

