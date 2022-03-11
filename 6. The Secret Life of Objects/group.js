class Group {
    constructor() {
        this.group = [];
        return this;
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
            return this;
        }
    }

    delete(value) {
        console.log(this.has(value))
        if (this.has(value)) {
            this.group = this.group.filter((x) => x !== value);
            return this;
        }
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(iterableObject) {
        var newGroup = new Group(iterableObject);
        for (let value of iterableObject) {
            newGroup.add(value);
        }
        return newGroup;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(o) {
        this.i = 0;
        this.group = o.group;
    }

    next() {
        if (this.i === this.group.length || this.i > 10) return { done: true };

        let value = this.group[this.i];
        this.i++;
        return { value, done: false };
    }
}

for (let value of Group.from([10, 20])) {
    console.log(value);
}

let group = Group.from([10, 20]);
console.log(group.delete(10))
console.log(group.has(10));
