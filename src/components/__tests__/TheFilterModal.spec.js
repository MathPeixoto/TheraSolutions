import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import TheFilterModal from "@/components/TheFilterModal.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("TheFilterModal.vue", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("Checks the props", () => {
    wrapper = shallowMount(TheFilterModal, {
      propsData: {
        dialog: true,
      },
      localVue,
      vuetify,
    });

    expect(wrapper.vm.dialog).toBe(true);
  });

  it("Checks if the error message is being shown", () => {
    wrapper = shallowMount(TheFilterModal, {
      propsData: {
        dialog: true,
      },
      localVue,
      vuetify,
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
