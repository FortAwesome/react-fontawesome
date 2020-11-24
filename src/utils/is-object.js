export default function isObject(val) {
 return Object.prototype.toString.call(val) === "[object Object]";
}
