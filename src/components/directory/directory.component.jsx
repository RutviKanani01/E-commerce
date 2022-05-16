import DirectoryItem from "../directory-item/directory-item.component"
import {DirectoryContainer} from './directory.styles'

const categories = [
  {
    id:1,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
    route: 'shop/hats'
  },
  {
    id:2,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/womens.png',
    route: 'shop/jackets'
  },
  {
    id:3,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/womens.png',
    route: 'shop/sneakers'
  },
  {
    id:4,
    title: 'Womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens'
  },
  {
    id:5,
    title: 'Mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/womens.png',
    route: 'shop/mens'
  }
]

const Directory = () => {
  
  return (
      <DirectoryContainer>
    {
      categories.map((category)=>(
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
  </DirectoryContainer>
  )
}

export default Directory