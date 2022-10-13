function likes(names) {
    const map = {
        0: "no one likes this",
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    };

    return (
        map[names.length] ||
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    );
}

module.exports = likes;
