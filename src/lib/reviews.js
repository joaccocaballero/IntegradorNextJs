import {marked} from 'marked';
import matter from 'gray-matter'
import {readdir, readFile} from 'node:fs/promises'

export async function getReview(gameName) {
    const text = await readFile('./content/reviews/' + gameName + '.md', 'utf8')
    const {content, data: {title, image, date}} = matter(text)
    const body = marked(content, {headerIds: false, mangle: false})
    return {gameName, title, date, image, body}
}

export async function getReviews(){
    const files = await readdir('./content/reviews')
    const gameNames = files.filter((file)=>file.endsWith('.md')).map((file) => file.slice(0,-'.md'.length))
    const reviews = []
    for ( const game of gameNames){
        const review = await getReview(game)
        reviews.push(review)
    }
    return reviews;
}