// 创建buffer

// 以具体数据的方式创建buffer
const buffer1 = Buffer.from('666哇');
const buffer2 = Buffer.from([1,2,3,4]);

// 创建一个长度为20的buffer，每一个是一个16进制数
const buffer3 = Buffer.alloc(20);
const buffer4 = '';
