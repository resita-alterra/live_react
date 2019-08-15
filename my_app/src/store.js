import createStore from "unistore";

export const store = createStore({
  is_login: false,
  username: "",
  email: "",
  avatar: ""
});

export const actions = store => ({
  login(state) {
    return { is_login: true };
  },

  logout(state) {
    return { is_login: false };
  },

  setUser(state, nama) {
    return { username: nama };
  },

  setEmail(state, email) {
    return { email: email };
  },

  setAvatar(state, avatar) {
    return { avatar: avatar };
  }
});
