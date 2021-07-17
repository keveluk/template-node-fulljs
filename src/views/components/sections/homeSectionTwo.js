import backgroundTwo from "../../../assets/images/background/background-1.png"
import darthVader from "../../../assets/images/elements/darth-vader.png"
import footer from '../footer';


let TextContent = ` 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem minus nam quae fugiat, tempora, voluptas ab nostrum pariatur aperiam, a laborum dolor nihil architecto. Error obcaecati vel, aut amet necessitatibus eos. Sed, libero eum. Dolore, doloribus ullam. Cupiditate sint dolores deserunt inventore. Esse, qui soluta veniam incidunt perferendis sapiente molestias dolorem laborum nobis asperiores neque ex obcaecati cum distinctio. Culpa quae sunt nostrum illum asperiores dolore quod sit eos nulla reiciendis perspiciatis neque soluta labore dolor illo sed commodi fugiat laborum incidunt, architecto in. Iusto repudiandae modi exercitationem, libero, nostrum corrupti odio mollitia fugit nesciunt itaque, quasi numquam quis?
`
let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image:url(${backgroundTwo})">
    <div class="container block-section--two">
    <div class="block-section--two--center">
        <img src="${darthVader}" alt="Vader" width="300px" height="auto">
        <div class="text-block--two">
            <p>${TextContent}</p>
        </div>
    </div>
        ${footer}
    </div>
</section>
`


export default HomeSectionTwo