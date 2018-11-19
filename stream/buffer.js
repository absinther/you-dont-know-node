var buf = Buffer.alloc(26);

for (var i = 0; i < 26; i++) {
    buf[i] = i + 97; // insert ASCII chars
}

console.log(buf); // type Buffer

console.log(buf.toString('utf8'));