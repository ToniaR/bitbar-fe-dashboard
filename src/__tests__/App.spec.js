import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App.vue'
import { exportAllDeclaration } from '@babel/types';

test('App has a .center-content class', () => {
    const vue = createLocalVue()

    const app = mount(App, { vue })

    expect(app.classes()).toContain('center-content')
})