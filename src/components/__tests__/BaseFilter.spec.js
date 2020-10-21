import { shallowMount } from "@vue/test-utils";
import BaseFilter from "@/components/BaseFilter.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BaseFilter, {
    propsData: {
      description: "enter",
      firstIcon: "close",
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseFilter.vue", () => {
  it("correctly set button description with close icon", () => {
    expect(wrapper.find("#description").text()).toBe("enter");
    expect(wrapper.find("#first-icon").text()).toBe("close");
  });

  it("click event was emitted", () => {
    wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
