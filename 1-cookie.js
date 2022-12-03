
//Написать функцию - преобразовать cookie в js объект, используя reduce

const rawCookies =
'APISID=vxPDw60eJPnW41cR/AsASXWBnTPDKoy0Et; SAPISID=A_QxAET-OS5Fgq3O/AsA6N0dpVZxv6KXto; __Secure-1PAPISID=A_QxAET-OS5Fgq3O/AsA6N0dpVZxv6KXto; __Secure-3PAPISID=A_QxAET-OS5Fgq3O/AsA6N0dpVZxv6KXto; SID=QghZQUvICoYhC2iPTGAusO6ezLQDKGI82eLJLYvKMwQgzvloHrygjOvp5J50w1WHcuakbA.; PREF=f4=4000000&tz=Asia.Yekaterinburg&gl=AR&f5=30000; SIDCC=AIKkIs2BpYRQDpD1YQkMEuVwGc3w4ICVjVFME2Y-DMm7fY2MyCDh-olSm0vuQxT99IeinmkGneM';

const splitByFirst =(str, sign) => {
  const index = str.indexOf(sign);
  const key = str.slice(0, index);
  const value = str.slice(index + 1);

  return [key, value];
};

const cookieToObject = (str) => {
  const entries = str.split("; ")
    .map((cookie) => splitByFirst(cookie, "="));

  // Решение с использованием методов объекта
  // const result = Object.fromEntries(entries);

  // Решение с использованием .reduce
  const result = entries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return result;
};

console.log(cookieToObject(rawCookies));
