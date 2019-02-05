import { Vue, Component } from 'nuxt-property-decorator';
import Carousel from '~/components/Carousel.vue';

@Component({
    components: {
        Carousel
    }
})
export default class IndexPage extends Vue {

    /* временное решение */
    private items: any[] = [
        {
            src: 'https://www.flirt.fashion/image/cache/catalog/banner1-1300x500.jpg'
          },
          {
            src: 'https://www.mechta.kz/upload/medialibrary/151/151c935991b445dceed7f579380574fb.jpg'
          },
          {
              src: 'http://nancystyle.ru/image/cache/catalog/Slyder/Main%20banner/1slayder-1272x500-1300x500.jpg'
          }
    ];
    /* чикнуть */
}