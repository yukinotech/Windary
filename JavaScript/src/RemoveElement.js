/**
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 * Accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0] === val ? 0 : 1;
    }

    let lastIndex = nums.length - 1;
    for (let i = 0; i < lastIndex; i++) {
        if (nums[i] === val) {
            exchange2values(nums, i, lastIndex);
            lastIndex--;

            while (lastIndex > i && nums[i] === val) {
                exchange2values(nums, i, lastIndex);
                lastIndex--;
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            return i;
        }
    }

    return nums.length;
};

/**
 *
 * @param {number[]} nums
 * @param {number} i
 * @param {number} lastIndex
 */
let exchange2values = function (nums, i, lastIndex) {
    if (lastIndex >= i && i >= 0) {
        let tmp = nums[lastIndex];
        nums[lastIndex] = nums[i];
        nums[i] = tmp;
    }
};


if (removeElement([3, 2, 2, 3], 3) === 2) {
    console.log("pass")
} else {
    console.error("failed")
}

if (removeElement([3, 3], 3) === 0) {
    console.log("pass")
} else {
    console.error("failed")
}

if (removeElement([], 0) === 0) {
    console.log("pass")
} else {
    console.error("failed")
}

if (removeElement([2, 3, 4, 5, 888, 2], 2) === 4) {
    console.log("pass")
} else {
    console.error("failed")
}

if (removeElement([3, 3], 0) === 2) {
    console.log("pass")
} else {
    console.error("failed")
}