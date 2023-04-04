function tryReturn() {
  // return true
}

console.log(tryReturn());

// a case where , a condition where code breaks return undefined

function apiError(msg, code) {
  throw { message: msg, apiCode: code };
}
console.log(apiError("server side error", 500));


// can define never here for standard purpose
function apiError1(msg, code): never {
  throw { message: msg, apiCode: code };
}
