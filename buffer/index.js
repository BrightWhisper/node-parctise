// 创建buffer

// 以具体数据的方式创建buffer
const buffer1 = Buffer.from('666哇');
const buffer2 = Buffer.from([1,2,3,4]);

// 创建一个长度为20的buffer，每一位是一个16进制数,最大表示256，超过就得占两位了，比如512在大端情况下就是02，00
const buffer3 = Buffer.alloc(20);
const buffer4 = '';

//这里Int8代表要写入数据的类型，16代表数值，2代表偏移量
buffer2.writeInt8(16,2);
console.log(buffer2);
// 这个代表从小端写入到偏移量为3的位置，高位在后，低位在前，最后结果是<Buffer 01 02 00 02>
buffer2.writeInt16LE(512,2)
console.log(buffer2);
// 这个代表从大端写入到偏移量为3的位置，高位在前，低位在后，最后结果是<Buffer 01 02 02 00>
buffer2.writeInt16BE(512,2)
// 大端小端和设备相关
console.log(buffer2);


const fs = require('fs');
const protobuf= require('protocol-buffers');
const schema  = protobuf(fs.readFileSync(__dirname+ '/test.proto','utf-8'));

console.log(schema);

// 编码成二进制数据包，实际上和后台通讯的时候就是要先编码发过去，它们解码来用，用完之后编码给我们，我们解码用
const buffer = schema.Column.encode({
    id: 1,
    name: 'Node.js',
    price: 80.4
})

// 解码
console.log(schema.Column.decode(buffer));