import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'zcnikh82',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skXAzhRH4q27Ju8kWFt6iHT4kAGxfPyYIalMkEvsgOaLFQqhyttXMocSaQlDDCzdLRJ442V0zUbRzwsi9hayn6aJAmROBZD1AOIUFqRgVGAKHKKeG3os2Ic0dcewzdgahk0UrBBnwiCo7aJchgStyXnPpsbIjgdIgrGKIA1ELkHKazhBjPkC'
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);