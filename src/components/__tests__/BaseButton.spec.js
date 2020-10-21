import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BaseButton, {
    propsData: {
      description: "enter",
      iconClass: "close",
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseButton.vue", () => {
  it("correctly set button description with close class", () => {
    expect(wrapper.find("span").text()).toBe("enter");
    expect(wrapper.vm.iconClass).toBe("close");
  });

  it("click event was emitted", () => {
    wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
