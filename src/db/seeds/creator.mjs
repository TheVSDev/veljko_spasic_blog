export const seed = async (db) => {
  await db("users").insert({
    firstName: "Creator",
    lastName: ".",
    email: "creator@creator.com",
    passwordHash:
      "c9c01aca4c1dd4b07bf85e008bea7cf2c1bbf464215f9a4d153fd234c2514992036f3c975f92b20f64763a696761cb2d3f828a72386fc83714e6159b1f1785c5ac8e42a3f037b66660a754840bbeee1e1021de2b398493eea572c87e7c50fcce0b8442a64f3a069dedaf9b850b822e8bc3a6997daf47d29c13f0ff4dff47bc71f91508804c3507f576d585caf656732cd95fe0a286a4c9a5be495a6e72444a9c27ea38cb65069660305f4213482184ec430241103b17139510bc0da5f015c8e6c884dcb57d2c5dad41a6ab1bf4ceb3f22a8c4b5d088d0c6a0a79021f19de15cfca985d56755260f4049f6bdb82179b446cebd35020779f30b7a5df0431e2b34f",
    passwordSalt:
      "5a48d18ac53558550b72f1842aa667c8fd53f8675f1219a27d2af4f298edc4777a31dc9afc0bd5f512595efca34115bbbb94f977e0f5160033854ee1a2241be44abfe81ca603e50111183e069e90d47d84890365a84bd07df90be8a22715de74ab4c7a0672f40d05f9f41e3e27084613232ed8bae2c29323bda4a20cabab0763fb6d66c1ab9b1b240a20135fb49c71dc130a5e1e20c0c595aafce52b470545db984fbeea9902e35eabc3f1285f56ed2a92cb4d2f2c8c702cadce3f245ff2de0c9f089abd5c15fdce567ca2948dd84fd96b7aac3b18327505995bc648d9f6cf1e708b073cc61512a89b51dfd67e6a87007407c1b07677f3dd7a2da97b4fdb68ab",
    userType: "creator"
  })
}