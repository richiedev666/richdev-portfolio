<template>
  <section class="skills-section__wrapper section__wrapper">
    <div id="skills-section-image-1" class="skills-section__image">
      <img src="~/assets/images/skills-bg-image-1.png" alt="" />
    </div>

    <div id="skills-section-image-2" class="skills-section__image">
      <img src="~/assets/images/skills-bg-image-2.png" alt="" />
    </div>

    <div class="skills-section__badge__wrapper">
      <div class="skills-section__badge">
        <img src="~/assets/images/skills-badge.png" alt="" />
      </div>
    </div>

    <div class="container">
      <div class="skills-section section">
        <div class="skills-section__content">
          <p>
            Fueled by high energy levels and boundless enthusiasm, I’m easily
            inspired and more then willing to follow my fascinationswherever
            they take me. I’m passionate, expressive, multi-talentedspirit with
            a natural ability to entertain and inspire. I’m never satisfied to
            just come up with ideas. Instead I have an almostimpulsive need to
            act on them
          </p>

          <p>
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavors. I’m a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease. I like to develop expertise in a number of areas
            over the course of my life and career.
          </p>

          <p>
            You can also call me a frontend developer, backend developer, web
            designer, system administrator, or by any other market defined
            function-title.
          </p>
        </div>

        <div class="skills-section__stack">
          <h1 class="skills-section__stack__title text-title">Stack</h1>

          <div class="skills-section__stack__list">
            <div
              v-for="(col, index) in stackList"
              :key="`stack-col-${index + 1}`"
              class="skills-section__stack__list__col"
            >
              <div
                v-for="(row, index) in col.items"
                :key="`stack-row-${index + 1}`"
                class="skills-section__stack__list__row"
              >
                <div class="skills-section__stack__list__row__badge">
                  <img :src="row.badge" alt="" />
                </div>

                <div class="skills-section__stack__list__items">
                  <div
                    v-for="(item, index) in row.items"
                    :key="`stack-item-${index + 1}`"
                    class="skills-section__stack__list__item"
                  >
                    <h2 class="skills-section__stack__list__item__name">
                      <span>{{ item.title }}</span>

                      <img :src="item.icon" alt="" />
                    </h2>

                    <div class="skills-section__stack__list__item__level">
                      <div
                        v-for="i in 8"
                        class="skills-section__stack__list__item__level__item"
                      >
                        <img
                          :src="
                            i > item.level
                              ? require('~/assets/images/point-empty.png')
                              : require('~/assets/images/point-filled.png')
                          "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-section__button">
          <button class="section__button">
            <span>
              {{ $t('hireMe') }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',

  computed: {
    stackList() {
      return [
        {
          id: 'col1',
          items: [
            {
              title: 'Frontend',
              badge: require('~/assets/images/frontend-badge.png'),
              items: [
                {
                  title: 'HTML',
                  level: 7,
                  icon: require('~/assets/images/icons/html-icon.png'),
                },
                {
                  title: 'CSS',
                  level: 7,
                  icon: require('~/assets/images/icons/css-icon.png'),
                },
                {
                  title: 'Javascript',
                  level: 7,
                  icon: require('~/assets/images/icons/js-icon.png'),
                },
                {
                  title: 'Typescript',
                  level: 5,
                  icon: require('~/assets/images/icons/ts-icon.png'),
                },
                {
                  title: 'Sass',
                  level: 7,
                  icon: require('~/assets/images/icons/sass-icon.png'),
                },
                {
                  title: 'Vue.js',
                  level: 8,
                  icon: require('~/assets/images/icons/vue-icon.png'),
                },
                {
                  title: 'React.js',
                  level: 7,
                  icon: require('~/assets/images/icons/react-icon.png'),
                },
                {
                  title: 'Nuxt.js',
                  level: 8,
                  icon: require('~/assets/images/icons/nuxt-icon.png'),
                },
              ],
            },
          ],
        },
        {
          id: 'col2',
          items: [
            {
              title: 'Backend',
              badge: require('~/assets/images/backend-badge.png'),
              items: [
                {
                  title: 'Node.js',
                  level: 7,
                  icon: require('~/assets/images/icons/nodejs-icon.png'),
                },
                {
                  title: 'Express.js',
                  level: 8,
                  icon: require('~/assets/images/icons/express-icon.png'),
                },
                {
                  title: 'Fastify.js',
                  level: 6,
                  icon: require('~/assets/images/icons/fastify-icon.png'),
                },
                {
                  title: 'PostgresSQL',
                  level: 7,
                  icon: require('~/assets/images/icons/postgre-icon.svg'),
                },
                {
                  title: 'MySQL',
                  level: 7,
                  icon: require('~/assets/images/icons/mysql-icon.png'),
                },
                {
                  title: 'MongoDB',
                  level: 7,
                  icon: require('~/assets/images/icons/mongo-icon.png'),
                },
                {
                  title: 'Ubuntu',
                  level: 6,
                  icon: require('~/assets/images/icons/ubuntu-icon.png'),
                },
                {
                  title: 'Nginx',
                  level: 6,
                  icon: require('~/assets/images/icons/nginx-icon.png'),
                },
              ],
            },
          ],
        },
        {
          id: 'col3',
          items: [
            {
              title: 'UI & UX',
              badge: require('~/assets/images/ui-ux-badge.png'),
              items: [
                {
                  title: 'Figma',
                  level: 8,
                  icon: require('~/assets/images/icons/figma-icon.png'),
                },
                {
                  title: 'Adobe XD',
                  level: 7,
                  icon: require('~/assets/images/icons/xd-icon.png'),
                },
                {
                  title: 'Adobe Photoshop',
                  level: 6,
                  icon: require('~/assets/images/icons/ps-icon.png'),
                },
                {
                  title: 'Adobe Illustrator',
                  level: 6,
                  icon: require('~/assets/images/icons/ai-icon.png'),
                },
              ],
            },
            {
              title: 'Favorite tools',
              badge: require('~/assets/images/favorite-tools-badge.png'),
              items: [
                {
                  title: 'Github',
                  level: 7,
                  icon: require('~/assets/images/icons/github-icon.svg'),
                },
                {
                  title: 'Postman',
                  level: 8,
                  icon: require('~/assets/images/icons/postgre-icon.svg'),
                },
                {
                  title: 'Webstorm',
                  level: 8,
                  icon: require('~/assets/images/icons/webstorm-icon.svg'),
                },
              ],
            },
          ],
        },
      ]
    },
  },
}
</script>
