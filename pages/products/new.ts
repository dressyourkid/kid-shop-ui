import { Component,Vue } from "nuxt-property-decorator"

@Component({})
export default class addProduct extends Vue {
    
    private categories: any[] = [];
    private imageName: string = '';
    private imageUrl: any = '';
    private imageFile: string = '';
    private formData = {};

    private pickFile () {
        (this.$refs.image as any).click();
    }

    private saveProduct () {
        this.$axios.post('upload', this.formData)
    }

    private onFilePicked (file: any) {
			
        const files = file.target.files
        if(files[0] !== undefined) {
            this.imageName = files[0].name

            const fr = new FileReader ()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.imageUrl = fr.result
                    this.formData = files[0]
                })
        } 
    }
    
    private async created() {
        const searchCategories = '';
        const fetchCategory = await this.$axios.$get('category');
        fetchCategory.content.forEach(item => {
            this.categories.push(item.name); 
        })
    }
    

    private name: string = "" ;
    private Description: string = "" ;
    private Price: string = "" ;
    private amount: string = "" ;
    private Category: string = "" ;
  
    private clear () {
        this.name = ''
        this.Description = ''
        this.Price = ''
        this.amount = ''
        this.Category =''
        this.imageName = ''
        this.imageUrl = false
    }
       
    
    
}
