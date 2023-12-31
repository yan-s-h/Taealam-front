<template>
  <v-navigation-drawer v-if="isMobile" v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-btn variant="text" class="v-btn__content" :to="isLogin ? '/profile' : '/login'">
        <v-avatar><v-img :src="!isLogin ? avatar : user.image === undefined ? avatar : user.image"
            cover></v-img></v-avatar>
      </v-btn>
      <template v-for="navItem in navItems" :key="navItem.to">
        <v-list-item v-if="navItem.show" :to="navItem.to">
          <template #prepend>
            <v-icon :icon="navItem.icon"></v-icon>
          </template>
          <v-list-item-title>{{ navItem.text }}</v-list-item-title></v-list-item>
      </template>
      <v-list-item v-if="isLogin" :to="'/admin'">
        <template #prepend>
          <v-icon icon="mdi-cog"></v-icon>
        </template>
        <v-list-item-title>Admin</v-list-item-title></v-list-item>
      <v-list-item v-if="isLogin" @click="logout">
        <template #prepend>
          <v-icon icon="mdi-logout"></v-icon>
        </template>
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!isLogin" :to="'/login'">
        <template #prepend>
          <v-icon icon="mdi-login"></v-icon>
        </template>
        <v-list-item-title>Log In</v-list-item-title></v-list-item>
      <v-list-item v-if="!isLogin" :to="'/register'">
        <template #prepend>
          <v-icon icon="mdi-account-plus"></v-icon>
        </template>
        <v-list-item-title>Sign up</v-list-item-title></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar color="primary">
    <v-container class="d-flex align-center">
      <v-btn to="/" selected-class="" :active="false">
        <v-avatar class="avatar me-2 pb-1"><v-img src="../assets/logo.png" class="logo"></v-img></v-avatar>
        <v-app-bar-title>Taealam</v-app-bar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>
      <template v-if="!isMobile">
        <template v-for="navItem in navItems" :key="navItem.to">
          <v-btn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show">{{ navItem.text
          }}</v-btn>
        </template>
      </template>
      <v-spacer v-if="!isMobile"></v-spacer>
      <div class="text-center" v-if="!isMobile">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              <v-avatar><v-img :src="!isLogin ? avatar : user.image === undefined ? avatar : user.image"
                  cover></v-img></v-avatar>
            </v-btn>
          </template>
          <v-list v-if="isLogin">
            <v-list-item class="text-center">
              Welcome {{ user.account }}
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item><v-btn variant="text" prepend-icon="mdi-account" :to="'/profile'">Profile</v-btn></v-list-item>
            <v-divider></v-divider>
            <v-list-item v-if="isAdmin">
              <v-btn variant="text" prepend-icon="mdi-cog" :to="'/admin'">Admin</v-btn></v-list-item>
            <v-list-item><v-btn variant="text" prepend-icon="mdi-logout" @click="logout">Sign
                Out</v-btn></v-list-item>
          </v-list>
          <v-list v-if="!isLogin">
            <v-list-item>Hi Visitor</v-list-item>
            <v-list-item><v-btn variant="text" prepend-icon="mdi-login" :to="'/login'">Log
                In</v-btn></v-list-item>
            <v-list-item><v-btn variant="text" prepend-icon="mdi-account-plus" :to="'/register'">Sign
                up</v-btn></v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
  <v-main>
    <router-view :key="$route.path"></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import router from '@/router'

const createSnackbar = useSnackbar()
const user = useUserStore()

const { isLogin, isAdmin, avatar } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const navItems = computed(() => {
  return [
    { to: '/courses', text: 'Courses', icon: '', show: isLogin.value },
    { to: '/culture', text: 'Culture Corner', icon: '', show: true },
    { to: '/discussion', text: 'Discussion Board', icon: '', show: true },
    { to: '/aboutus', text: 'About Us', icon: '', show: true }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    // createSnackbar({
    //   text: 'You have been logged out',
    //   showCloseButton: false,
    //   snackbarProps: {
    //     timeout: 2000,
    //     color: 'green',
    //     location: 'bottom'
    //   }
    // })
    router.push('/')
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>
<style scoped lang="sass" src="../assets/layouts/_front.sass">
</style>
