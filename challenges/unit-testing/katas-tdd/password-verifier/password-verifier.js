/*
 * Return 'Password rejected':
 * If the password is null,
 * If the password is less than 8 characters,
 * If the password does not have at least 1 uppercase letter,
 * If the password does not have at least 1 number,
*/
function verify(pwd){
  if (!pwd || pwd.length<8){
    return 'Password rejected'; 
  }
  const regExp =new RegExp('^(?=.*[A-Z])(?=.*[0-9]).+$');
  return !regExp.test(pwd) ? 'Password rejected': 'Password accepted';
}
module.exports = verify;
