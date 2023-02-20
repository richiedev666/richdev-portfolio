<template>
  <section class="skills-section__wrapper section__wrapper">
    <div id="skills-section-image-1" class="skills-section__image">
      <img
        src="~/assets/images/skills-bg-image-1@1.webp"
        srcset="
          ~/assets/images/skills-bg-image-1@1.webp 1x,
          ~/assets/images/skills-bg-image-1@2.webp 2x
        "
        alt=""
      />
    </div>

    <div id="skills-section-image-2" class="skills-section__image">
      <img
        src="~/assets/images/skills-bg-image-2@1.webp"
        srcset="
          ~/assets/images/skills-bg-image-2@1.webp 1x,
          ~/assets/images/skills-bg-image-2@2.webp 2x
        "
        alt=""
      />
    </div>

    <div class="skills-section__badge__wrapper">
      <div class="skills-section__badge">
        <img src="~/assets/images/skills-badge.png" alt="" />
      </div>
    </div>

    <div class="container">
      <div class="skills-section section">
        <div
          class="skills-section__content"
          v-html="$t('sections.skills.description')"
        ></div>

        <div class="skills-section__stack">
          <h1 class="skills-section__stack__title text-title">
            {{ $t('stack') }}
          </h1>

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
          <a class="section__button" href="#contacts-section">
            <span>
              {{ $t('hireMe') }}
            </span>
          </a>
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
                  icon: require('assets/icons/html-icon.png'),
                },
                {
                  title: 'CSS',
                  level: 7,
                  icon: require('assets/icons/css-icon.png'),
                },
                {
                  title: 'Javascript',
                  level: 7,
                  icon: require('assets/icons/js-icon.png'),
                },
                {
                  title: 'Typescript',
                  level: 5,
                  icon: require('assets/icons/ts-icon.png'),
                },
                {
                  title: 'Sass',
                  level: 7,
                  icon: require('assets/icons/sass-icon.png'),
                },
                {
                  title: 'Vue.js',
                  level: 8,
                  icon: require('assets/icons/vue-icon.png'),
                },
                {
                  title: 'React.js',
                  level: 7,
                  icon: require('assets/icons/react-icon.png'),
                },
                {
                  title: 'Nuxt.js',
                  level: 8,
                  icon: require('assets/icons/nuxt-icon.png'),
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
                  icon: require('assets/icons/nodejs-icon.png'),
                },
                {
                  title: 'Express.js',
                  level: 8,
                  icon: require('assets/icons/express-icon.png'),
                },
                {
                  title: 'Fastify.js',
                  level: 6,
                  icon: require('assets/icons/fastify-icon.png'),
                },
                {
                  title: 'PostgresSQL',
                  level: 7,
                  icon: require('assets/icons/postgre-icon.svg'),
                },
                {
                  title: 'MySQL',
                  level: 7,
                  icon: require('assets/icons/mysql-icon.png'),
                },
                {
                  title: 'MongoDB',
                  level: 7,
                  icon: require('assets/icons/mongo-icon.png'),
                },
                {
                  title: 'Ubuntu',
                  level: 6,
                  icon: require('assets/icons/ubuntu-icon.png'),
                },
                {
                  title: 'Nginx',
                  level: 6,
                  icon: require('assets/icons/nginx-icon.png'),
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
                  icon: require('assets/icons/figma-icon.png'),
                },
                {
                  title: 'Adobe XD',
                  level: 7,
                  icon: require('assets/icons/xd-icon.png'),
                },
                {
                  title: 'Adobe Photoshop',
                  level: 6,
                  icon: require('assets/icons/ps-icon.png'),
                },
                {
                  title: 'Adobe Illustrator',
                  level: 6,
                  icon: require('assets/icons/ai-icon.png'),
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
                  icon: require('assets/icons/github-icon.svg'),
                },
                {
                  title: 'Postman',
                  level: 8,
                  icon: require('assets/icons/postman-icon.svg'),
                },
                {
                  title: 'Webstorm',
                  level: 8,
                  icon: require('assets/icons/webstorm-icon.svg'),
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
