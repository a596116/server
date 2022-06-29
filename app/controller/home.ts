import { Controller } from 'egg'

export default class HomeController extends Controller {
    async index() {
        await this.ctx.render('index.html')
    }
}