export const getters = {
    isAuthenticated(state) {
        console.log("auth",state.auth)
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }