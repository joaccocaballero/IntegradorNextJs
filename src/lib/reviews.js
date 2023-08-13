import {marked} from 'marked';
import qs from 'qs'

const CMS_URL = 'http://localhost:1337'

export const CACHE_TAG_REVIEWS = 'review'

export async function getReview(slug){
    const {data} = await fetchReviews({
        filters: {slug: {$eq: slug}},
        fields: ['slug', 'title', 'body', 'subtitle', 'publishedAt'],
        populate: {image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
        pagination: {pageSize: 1, withCount: false}
    })
    if(data.length === 0){
        return null
    }
    const item= data[0];
    return {
       ...toReview(item),
        body: marked(item.attributes.body,{headerIds:false, mangle:false})
    }
}

async function fetchReviews(parameters) {
    const url = CMS_URL + '/api/reviews?' + qs.stringify( parameters, {
        encodeValuesOnly: true
    })
    const response = await fetch(url,{
        next:{
            tags: [CACHE_TAG_REVIEWS]
        }
    })
    if(!response.ok){
        throw new Error('CMS returned:' + response.status +'for' + url)
    }
    return await response.json();
}

export async function getReviews(pageSize, page){
    const {data,meta} = await fetchReviews({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: {image: {fields: ['url']}},
        sort: ['publishedAt:desc'],
        pagination: {pageSize, page}
    });
    return{
        pageCount: meta.pagination.pageCount,
        reviews: data.map(toReview),
    } 
}

function toReview(item){
    const {attributes} = item;
    return {
        slug: attributes.slug,
        title: attributes.title,
        subtitle: attributes.subtitle,
        date: attributes.publishedAt.slice(0, 'yy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url
    }

}