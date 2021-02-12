export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60269d0c10cae5fb94d4a143',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7yn79vdt',
                  apiId: '9733650b-e78e-4cb0-b007-e39bd455159b'
                },
                {
                  buildHookId: '60269d0c1c30bfebd1e2176b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ry9s766d',
                  apiId: 'cf8709da-f236-4419-a082-cdc2f7eeed9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vegardjo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ry9s766d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
