<template>
  <nav class="d-flex justify-space-between align-center">
    <div class="d-flex align-center">
      <img src="../assets/symbol.svg" alt="LOGO" class="ml-3">
      <v-divider vertical class="mr-5 ml-1"></v-divider>
      <div id="icons" class="d-flex mr-3">
        <div id="security" class="icon-size d-flex justify-center align-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
        </div>
        <div id="person" class="icon-size d-flex justify-center align-center">
          <i class="fas fa-user"></i>
        </div>
      </div>
      <v-toolbar height="36px" class="ml-3" width="298px" outlined dense color="#F5F5F5">
        <v-toolbar-title class="font">Pesquisar...</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            icon
            class="hidden-xs-only"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <div class="d-flex">
      <div id="tune" class="icon-size d-flex justify-center align-center mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
      </div>
      <base-button class="ml-1" icon-class="fas fa-user" description="INCLUIR USUÁRIO"></base-button>
      <v-divider vertical class="mr-5 ml-5"></v-divider>
      <div id="last-icons" class="d-flex justify-center align-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg></span>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "Header",
  components: {
    BaseButton,
  }
}
</script>

<style lang="scss" scoped>
#security, #tune {
  background-color: #FFFFFF;
}

#person {
  Opacity: 100%;
  background-image: linear-gradient(224.78317304448626deg, #FF8700, #D83367);
}

#last-icons {
  span{
    margin-right: 24px;
  }
}

.img-size {
  width: 52px;
  height: 48px;
}

.font {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
  font-style: italic;
}

.icon-size {
  width: 52px;
  height: 48px;
  border-radius: 4px;
}

nav {
  background-color: #F5F5F5;
  height: 96px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
}

i {
  color: #FFFFFF;
}
</style>