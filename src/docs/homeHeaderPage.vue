<template>
  <div id="app">
      <nav :class="className" :is="tag" :style="navStyle">
     <a :href="href" class="navbar-brand" >{{name}}
      <img src="../assets/justopslogo.svg" style="width: 15%;">
    </a>
    </nav>
    <navbar dark position="top" class="default-color" scrolling>
      <navbar-collapse>
        <navbar-nav right>
         <!--  <navbar-item waves-fixed><a class="navbarItem1" href="">HOW IT WORKS</a></navbar-item> -->
          <navbar-item href="#/pricing" class="pricenavitm" v-if="loggedIn === '0'"><a class="navbarItem1" href="#/pricing" >PRICING</a></navbar-item>

          <navbar-item href=""  class="navprclog" v-else><a class="navprclog"></a></navbar-item>

          <navbar-item href="#/signin" id="login" class="loginitm" v-if="loggedIn === '0'"><a class="navbarItem1" href="#/signin" id="login1" v-if="loggedIn === '0'">LOG IN</a></navbar-item>
          <div>
          <column v-if="loggedIn === '0'">
          <navbar-item href="#/signup" class="navbarit" id="headSignup"><a class="navbarItem2" href="#/signup" v-if="loggedIn === '0'">SIGN UP</a>
          </navbar-item>
        </column>
          <!-- <navbar-item waves-fixed v-b-tooltip.hover title="Sign out" v-else> <a href="#" v-on:click="logout" class="link naveUser"><span><b>{{ userName   }}</b></span></a></navbar-item> -->
          <dropdown btn-group v-else>
          <dropdown-toggle @click.native="toggleDropdown(0)" class="naveUser1" style="color: #000000;">{{ userName   }}</dropdown-toggle>
          <dropdown-menu v-show="active[0]" class="collapse-item">
          <!-- <dropdown-item href="#/profile"><a href="#/profile">Profile</a></dropdown-item> -->
          <dropdown-item v-on:click.native="logout" ><a v-on:click="logout">Log out</a></dropdown-item>
          </dropdown-menu>
          </dropdown>
          </div>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <main :style="{marginTop: '0px'}">
     <!--  <router-view></router-view> -->
    </main>
   <!--  <Ftr color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </p>
    </Ftr> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NavbarItem from '../components/NavbarItem.vue';
import NavbarNav from '../components/NavbarNav.vue';
import NavbarCollapse from '../components/NavbarCollapse.vue';
import Ftr from '../components/Footer.vue';
import EdgHd from '../components/EdgeHeader.vue';
import Dropdown from '../components/Dropdown.vue';
import DropdownItem from '../components/DropdownItem.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import DropdownToggle from '../components/DropdownToggle.vue';
import Btn from '../components/Button.vue';
import MdInput from '../components/MdInput.vue';
import MdTextarea from '../components/MdTextarea.vue';
import Column from '../components/Col.vue';
export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Ftr,
    EdgHd,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Btn,
    Column,
    'mdinput': MdInput,
    'mdtextarea': MdTextarea,
  },
  data() {
    return {
      loggedIn: localStorage.getItem('loggedIn') || '0',
      userName:"",
      tag:"",
      className:"",
      navStyle:"",
      href:"",
      name:"",
      active: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false
      },
    };
  },
  methods:{

    /**
     * [logout - To logout for clearing the localstorage of the user's data]
     * @return {[void]} [Nothing to return]
     */
    logout() {
      localStorage.clear();
      window.location.reload(true);
      // localStorage.setItem('loggedOut', '1');
      this.$router.push('/');
      // this.$notify.success('Logout Successfully!!');
    },

    /**
     * [toggleDropdown - To display the username and logout menu in dropdown]
     * @param  {[INT]} index [index value of the dropdown menu]
     * @return {[void]}       [Nothing to return]
     */
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },

    /**
     * [allDropdownsClose - To close the dropdown menu]
     * @param  {[INT]} target [index value for dropdown menu]
     * @return {[void]}        [Nothing to return]
     */
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },

    /**
     * [onClick -To trigger the action for dropdown]
     * @param  {[STRING]} e [event]
     * @return {[Boolean]}   [Return the boolean value]
     */
    onClick(e) {
      let parent = e.target;
      let body = document.getElementsByTagName('body')[0];
      while (parent !== body) {
        if (parent.classList.contains('dropdown') || parent.classList.contains('btn-group')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.allDropdownsClose(e.target);
    }
  },

  /**
   * [mounted - Lifecycle event to call the eventHandler dropdown]
   * @return {[void]} [Nothing to return]
   */
  mounted() {
    if (localStorage.getItem("localstore") == 1){
      // window.location.reload(true);
      localStorage.setItem("localstore", 2);
    }
    document.addEventListener('click', this.onClick);
  },

  /**
   * [beforeMount - Lifecycle event to get the username and check the user loggedin or not]
   * @return {[void]} [Nothing to return]
   */
  beforeMount() {
    this.userName = localStorage.getItem('firstName') || '';
    this.loggedIn = localStorage.getItem('loggedIn') || '0';
  },
};

</script>

<style>
.navbarit{
  width: 9em;
  margin-right: 2em;
}
.navsup{
  width: 9em;
  margin-right: 2em;
}
.pricenavitm{
  width: 15% !important;
  margin-right: 6rem !important;
}
.loginitm{
  width: 22%;
  margin-right: 6rem !important;
}
.dropdown-item:active{
  background-color: transparent !important;
}
.flyout {
  display:flex;
  flex-direction: column;
  /*min-height:100vh;*/
  justify-content: space-between;
}
.default-color{
  background-color: #FFFFFF !important;
}
a.navbarItem1{
  color: #000000 !important;
  font-weight: normal !important;
  /*margin-right: 6em !important;*/
  margin-left: 0.5em !important;
  padding-top: 0.7em !important;
  font-size: 16px !important;
}
a.navbarItem2{
  color: #FFFFFF !important;
  background-color: #8bc34a;
  background-color: transparent;
  font-weight: normal !important;
  margin-right: 2em !important;
  padding-left: 2em !important;
  font-size: 16px !important;
}
a.navprclog{
  color: #000000 !important;
  font-weight: normal !important;
  margin-right: 2em !important;
  margin-left: 0.5em !important;
  padding-top: 0.7em !important;
  font-size: 16px !important;
}
.navprclog{
  margin-top: 0.3em !important;
}
.navbarit{
  background-color: #8bc34a;
  border-radius: 4px !important;
}
.fixed-top{
  position: unset !important;
}
.naveUser1{
  color: #000000 !important;
}
/*.default-color1{
  background-color: #f95623 !important;
}
.navbarItem2{
  color: #FFFFFF !important;
}*/
.btn-default.dropdown-toggle:hover, .btn-default.dropdown-toggle:focus {
  /*background-color: #8bc34a !important;*/
  background-color: transparent;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0) !important;
}
.btn-default.dropdown-toggle:focus {
  /*background-color: #8bc34a !important;*/
  background-color: transparent;
}
.btn:focus, .btn.focus {
  box-shadow: 0 0 0 0rem rgba(0, 0, 0, 0) !important;
}
.btn-group > .btn:hover{
  z-index: 0 !important;
}
.btn-group > .btn:focus{
  z-index: 0 !important;
}
.btn-default.dropdown-toggle{
   /*background-color: #8bc34a !important;*/
   background-color: transparent;
  font-size: 16px !important;
  padding: 0.8em !important;
  color: #000000 !important;
  margin-right: 1em !important;
}
.btn{
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0) !important;
}
.btn-default{
  color: #000000 !important;
}
@media (max-width: 320px){
  .loginitm {
      width: 28% !important;
  }
}
@media (max-width: 575px){
  .loginitm{
    width: 24%;
  }
}
@media (width: 600px){
  .navbarit{
    width: 25% !important;
  }
}
@media (width: 960px){
  .navbarit{
    width: 15% !important;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbarit{
    width: 25%;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .navbarit{
    width: 20%;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
  a.navbarItem1 {
      margin-right: 4em !important;
  }
}
</style>
