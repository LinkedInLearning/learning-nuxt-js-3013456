export default ({ app }, inject) => {
  inject('welcome', msg => console.log(`Welcome ${msg}`))
}