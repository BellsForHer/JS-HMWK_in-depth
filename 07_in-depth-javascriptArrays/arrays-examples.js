// let brotherOne = "Johnny";
// let brotherTwo = "Jimmy";
// let brotherThree = "James";

// const brothers = ["Johnny", "Jimmy", "James"];

const brothers = [
    {
        firstName: "Johnny",
        weight: 150
    },

    { 
        firstName: "Jimmy",
        weight: 160
    },
    {
        firstName: "James",
        weight: 170
    }


]

// console.log(`We are three brothers ${brotherOne}, ${brotherTwo}, ${brotherThree}`);

// console.log(`We are three brothers: ${brothers[0]}, ${brothers[1]}, ${brothers[2]}.`);

console.log(`We are three brothers: ${brothers[0].firstName}, ${brothers[1].firstName}, ${brothers[2].firstName}.`);