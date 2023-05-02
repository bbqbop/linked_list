# Linked List
This is an implementation of a singly Linked List in JavaScript.
All methods traversing the list have been implemented recursively in this example.

## added methods:

- `prepend(value)`: Adds a new node containing value to the beginning     of the list.
- `append(value)`: Adds a new node containing value to the end of the     list.
- `pop()`: Removes and returns the last node from the list.
- `removeAt(index)`: Removes and returns the node at the given index.
- `at(index)`: Returns the node at the given index.
- `insertAt(value, index)`: Inserts a new node containing value at the     given index.
- `size()`: Returns the number of nodes in the list.
- `head()`: Returns the first node of the list.
- `tail()`: Returns the tail node of the list.
- `contains(value)`: Returns true if the list contains a node with the     given value.
- `find(value)`: Returns the index of the node with the given value.
- `toArray()`: Returns an array of all the values in the list.
- `toString()`: Returns a string representation of the list.

### Here's an example usage of the **LinkedList** class:
```
const list = new LinkedList;
list.prepend('initial Node');
list.prepend('new first Node');
list.append('first append');
list.append('second append');
console.log(JSON.stringify(list, undefined, 2));
```
This creates a new linked list, adds two nodes to the beginning of the list using the prepend method, and two nodes to the end of the list using the append method. The JSON.stringify method is used to print the list to the console in a readable format.

Several test methods are also included in the code, which can be uncommented to test the functionality of the different methods.

Thank you for checking out this implementation of a Linked List!
