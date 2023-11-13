let str = 'zhufengpeixunzhoulaoshi',
  max = 0,
  res = [];
flag = false;
str = str
  .split('')
  .forEach((a, b) => {
    a.localeCompare(b);
  })
  .join('');
for (let i = str.length; i > 0; i--) {
  let reg = new RegExp('([a-zA-Z])\\1{' + (i - 1) + '}', 'g');
  str.replace(reg, (content, $1) => {
    res.push($1);
    max = i;
    flag = true;
  });
  if (flag) break;
}
'([a-zA-Z])\\1{' + i + '}';
