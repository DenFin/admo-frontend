export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    console.log('MIDDLEWAAAAARE')
    return redirect('/auth/login')
  }
}
