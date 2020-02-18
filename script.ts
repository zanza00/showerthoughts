#!/usr/bin/env -S deno --allow-net

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

try {
    const result = await fetch(
        "https://www.reddit.com/r/showerthoughts/top.json?sort=top&t=all&limit=100"
    );

    const json = await result.json();

    const max = json.data.dist;

    const random = getRandomInt(max) - 1;

    const selected = json.data.children[random];

    console.log(selected.data.title);
    console.log("-" + selected.data.author);
} catch (error) {
    console.log("OOOPS");
    console.log(error);
}
