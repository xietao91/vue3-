const raw = [1, 2];
const arr = new Proxy(raw, {
  get(target, key) {
    console.log("get", key);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log("set", key);
    return Reflect.set(target, key, value);
  },
});

arr.map((v) => v + 1);
