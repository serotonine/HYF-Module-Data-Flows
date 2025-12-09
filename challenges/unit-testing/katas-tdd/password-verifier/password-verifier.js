function verifier(pwd){
  if (!pwd || pwd.length<8){
    return 'Password rejected'; 
  }
  const regExp =new RegExp('[A-Z-0-9]+');
  return !regExp.test(pwd) ? 'Password rejected': 'Password accepted';
}
console.log(verifier("1234Asidonie"));
