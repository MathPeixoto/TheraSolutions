import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import TheTable from "@/components/TheFooter.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("TheTable.vue", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("test if the table is being well displayed", () => {
    wrapper = mount(TheTable, {
      localVue,
      vuetify,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
