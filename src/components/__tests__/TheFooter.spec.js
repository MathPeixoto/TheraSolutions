import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import TheFooter from "@/components/TheFooter.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("TheFooter.vue", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("test if the footer is being well displayed", () => {
    wrapper = mount(TheFooter, {
      localVue,
      vuetify,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
