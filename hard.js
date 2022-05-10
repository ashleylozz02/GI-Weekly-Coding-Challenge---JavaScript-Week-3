let PII = (privateNumber) => {
  let name = "Ashley Lorenzo";
  let ssn = privateNumber;

  return {
    getName: function () {
      return name;
    },
  };
};

let account = PII("685-345-89");
console.log(account.getName());
console.log(account.SNN);
