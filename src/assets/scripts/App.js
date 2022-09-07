
import swiper from "./swiper"
import aside from "./aside"
import menuSub from "./menuSub"
import modal from "./modal"
import search from "./search"
import textarea from "./textarea"
class App {
    init() {
        aside.init()
        search.init()
        swiper.init()
        menuSub.init()
        modal.init()
        textarea.init()
    }
}
const app = new App()
app.init()