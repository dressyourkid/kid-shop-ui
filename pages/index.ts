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
            src: 'https://downloader.disk.yandex.ru/preview/31aad32a6b8571104df753d6ba8e0d8f492802a929abc606c43c2aaf4abd163f/5c5311fa/HmSWU36O-4FGXq06Xaj8jRf54KqNddBYImP5ESkQRqsNNzdV7ynRFB8g2RBXaStPW24Z9l1U5Id2IlA52BMMng%3D%3D?uid=0&filename=carousel1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1364x626'
          },
          {
            src: 'https://downloader.disk.yandex.ru/preview/b4be22635a3f55254282b70d2bba6ed4814b5d781e22d7ff950f07abe1a4c931/5c53122c/gHB2ccHDtcOpzt3Wij12LUBl9z63HT1AEk0RZ2V_LuT1ssqw97EDnC3lLppPNQlY8TBVMz-fC7xt1K2FY0nRqg%3D%3D?uid=0&filename=carousel2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=2048x2048'
          },
          {
              src: 'https://downloader.disk.yandex.ru/preview/c5b4e51d541ce6d5222dc197a0c6d0be387ea10f8e7aa4a2e9737562909ceda6/5c53124b/Cw8etDaRN0aUN8Ym1STOnRf54KqNddBYImP5ESkQRqsBgQnLevguH2oX7eDmRnr_4EH9YFeYFr_afLYfOHdg9A%3D%3D?uid=0&filename=carousel3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=2048x2048'
          }
    ];
    /* чикнуть */
}