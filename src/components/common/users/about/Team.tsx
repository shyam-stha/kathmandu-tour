import CardTeamMember from './CardTeamMember'
import TitleAbout from './TitleAbout'
import { darbarSqr } from '../../../../assets/images/cards'

const Team = () => (
    <section>
        <TitleAbout title='City Tours Team' />
        <div className='flex flex-col gap-6 sm:gap-10'>
            <CardTeamMember
                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam placeat nobis iusto praesentium quo ea consequuntur cupiditate harum, minus aut unde iste. Consectetur ea veritatis similique cum neque quos perspiciatis recusandae labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsa assumenda illum, tempore ea autem tempora nam, voluptates cumque maiores quod iusto consectetur, rerum voluptas maxime minima in eum magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem hic molestias inventore veniam. Labore deserunt maiores ratione veritatis, aut harum deleniti excepturi maxime recusandae illum obcaecati nisi laboriosam voluptatum quibusdam? Amet cum, quasi perspiciatis harum, dolorem consequatur, laborum asperiores magnam quisquam velit aspernatur cupiditate? Consequuntur architecto tempore temporibus corporis a autem voluptas sequi, alias laboriosam qui, minima modi, consequatur quas cum enim repudiandae doloremque impedit et! Voluptatibus repellat iusto tempora quae dolorum esse similique odit quasi voluptate voluptates quaerat tempore ad, magnam dignissimos corrupti veniam neque nisi fuga eius nam nostrum aliquam atque quam vitae! Corrupti culpa esse reiciendis numquam dolor excepturi nobis odit vero sunt, tenetur cum debitis iusto amet a tempore vitae earum exercitationem nostrum incidunt saepe unde voluptate, aperiam rem! Soluta omnis qui, officia ipsum aut nobis veniam eaque culpa accusamus ea possimus, obcaecati dolor. Illo officia eum molestiae nam soluta possimus laborum non quo! Eos odit sint necessitatibus facere! Sed fugit ipsum nesciunt, quis consequuntur illo accusamus corporis fugiat officiis placeat ut facilis iure asperiores ad dolorem inventore dignissimos? Alias ipsum odio illo molestiae eveniet labore. Suscipit magni ipsum harum esse autem, repellendus optio impedit dolore quis quaerat ea, hic iste, laborum beatae blanditiis dolores? '
                position='CEO'
                image={darbarSqr}
                name='Prabhat Khadka'
            />
            <CardTeamMember
                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam placeat nobis iusto praesentium quo ea consequuntur cupiditate harum, minus aut unde iste. Consectetur ea veritatis similique cum neque quos perspiciatis recusandae labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsa assumenda illum, tempore ea autem tempora nam, voluptates cumque maiores quod iusto consectetur, rerum voluptas maxime minima in eum magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem hic molestias inventore veniam. Labore deserunt maiores ratione veritatis, aut harum deleniti excepturi maxime recusandae illum obcaecati nisi laboriosam voluptatum quibusdam? Amet cum, quasi perspiciatis harum, dolorem consequatur, laborum asperiores magnam quisquam velit aspernatur cupiditate? Consequuntur architecto tempore temporibus corporis a autem voluptas sequi, alias laboriosam qui, minima modi, consequatur quas cum enim repudiandae doloremque impedit et! Voluptatibus repellat iusto tempora quae dolorum esse similique odit quasi voluptate voluptates quaerat tempore ad, magnam dignissimos corrupti veniam neque nisi fuga eius nam nostrum aliquam atque quam vitae! Corrupti culpa esse reiciendis numquam dolor excepturi nobis odit vero sunt, tenetur cum debitis iusto amet a tempore vitae earum exercitationem nostrum incidunt saepe unde voluptate, aperiam rem! Soluta omnis qui, officia ipsum aut nobis veniam eaque culpa accusamus ea possimus, obcaecati dolor. Illo officia eum molestiae nam soluta possimus laborum non quo! Eos odit sint necessitatibus facere! Sed fugit ipsum nesciunt, quis consequuntur illo accusamus corporis fugiat officiis placeat ut facilis iure asperiores ad dolorem inventore dignissimos? Alias ipsum odio illo molestiae eveniet labore. Suscipit magni ipsum harum esse autem, repellendus optio impedit dolore quis quaerat ea, hic iste, laborum beatae blanditiis dolores? '
                position='CEO'
                image={darbarSqr}
                name='Prabhat Khadka'
                imgPosition='right'
            />
        </div>
    </section>
)

export default Team
