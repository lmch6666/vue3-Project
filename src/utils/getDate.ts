export function getDate(value: any, isedit: boolean = false) {
  const day = new Date().toLocaleString();
  if (!isedit) {
    value.createAt = day;
  }
  value.updateAt = day;
  return value
}


export function filterTime(gold: any, origin: any) {
  for (const key in origin) {
    if (origin[key]) {
      if (key == "time" && origin[key]) {
        gold["createAt"] = new Date(origin[key][0]).toLocaleString();
        gold["updateAt"] = new Date(origin[key][1]).toLocaleString();
        continue;
      }
      gold[key] = origin[key];
    }
  }
  return gold
}
