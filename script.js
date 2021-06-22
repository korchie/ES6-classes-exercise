"use strict";

class Room {
    constructor(name, length, width, capacity = 15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }
    // methods go here!    


    getArea(){
        return this.length * this.width;
    }

    getPerimeter(){
        return 2 * (this.length + this.width);
    }
}

let room1 = new Room("Sun", 30, 20); // shift + alt down key duplicates the line!
let room2 = new Room("Green", 15, 20, 18);

console.log("room1's name:", room1.name); // "Sun"
console.log("room1's length:", room1.length); // 
console.log("room1's width:", room1.width); // 
console.log("room 1's area:", room1.getArea());
console.log("room1's perimeter:", room1.getPerimeter());
console.log("room1's capacity:", room1.capacity); // 15

console.log("room2's name:", room2.name); // "Green"
console.log("room2's length:", room2.length); // 
console.log("room2's width:", room2.width); // 
console.log("room2's area:", room2.getArea());
console.log("room2's perimeter:", room2.getPerimeter());
console.log("room2's capacity:", room2.capacity);


// **Phase 2**
// 6. Add an available (boolean) property to Room that is not set from a constructor parameter. It always starts out as true. (scenario #2)

// 7. After creating room2, set available to false.
room2.available = false;

// 8. Add a console.log for the available property of both rooms.
console.log("room1's available", room1.available);
console.log("room2's available", room2.available);

/// **Phase 3:**
// 9. Add a capacity (number) property to Room that is an optional constructor parameter. If not specified, default to 15.

// 10. Modify the new call for room2 to set capacity to 18 using a constructor parameter.
