import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Home from "@/views/Home.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("Home.vue", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("test if the home is being well displayed", () => {
    wrapper = mount(Home, {
      localVue,
      vuetify,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
