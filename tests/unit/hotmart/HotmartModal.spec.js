import Vuex from "vuex"
import BootstrapVue from "bootstrap-vue"
import HotmartModal from "@/hotmart/components/modal"
import { BaseButton } from "@/components/lib"
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils"
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.component(BaseButton.name, BaseButton)
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()
localVue.use(BootstrapVue)

const wrapper = shallowMount(HotmartModal, {
  localVue,
  router,
  propsData: {
    accountName:"account",
    loading: false,
  }
})

describe("HotmartModal.vue", () => {
  it("is HotmartModal", () => {
    expect(wrapper.is(HotmartModal)).toBe(true)
  })

  it("should show if showModal is true", () => {
    wrapper.vm.show()
    expect(wrapper.vm.showModal).toBe(true)
    expect(wrapper.find("#hotmart-modal").isVisible()).toBe(true)
  })
  it("should hide, but exists if showModal is false", () => {
    wrapper.vm.hide()
    expect(wrapper.vm.showModal).toBe(false)
    expect(wrapper.find("#hotmart-modal").exists()).toBe(true)
  })
})
