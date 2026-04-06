import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const isLoggedIn = ref(false)
  const adminInfo = ref(null)

  const setToken = (newToken) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
    isLoggedIn.value = true
  }

  const setAdminInfo = (info) => {
    adminInfo.value = info
  }

  const logout = () => {
    token.value = ''
    localStorage.removeItem('token')
    isLoggedIn.value = false
    adminInfo.value = null
  }

  return { token, isLoggedIn, adminInfo, setToken, setAdminInfo, logout }
})