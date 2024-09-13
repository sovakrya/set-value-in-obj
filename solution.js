function setValueInObj(path, value, obj) {
  if (!path.length) {
    throw new Error("path mast have at least 1 key");
  }

  let temp = obj;

  for (let i = 0; i < path.length - 1; i++) {
    if (typeof temp !== "object" || temp === null) {
      throw new Error(
        `value of object at path: "${path
          .slice(0, i + 1)
          .join(".")}" must be object`
      );
    }

    temp = temp[path[i]];
  }

  if (typeof temp !== "object" || temp === null) {
    throw new Error(
      `value of object at path: "${path
        .slice(0, path.length - 1)
        .join(".")}" must be object`
    );
  }

  temp[path.at(-1)] = value;
}
