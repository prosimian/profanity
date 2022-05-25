import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// ********************************************************
// Objects

import address from './objects/address'
import cards from './objects/cards'
import cardsPages from './objects/cardsPages'
import cta from './objects/cta'
import content from './objects/content'
import contentSection from './objects/contentSection'
import form from './objects/form'
import gallery from './objects/gallery'
import menuItem from './objects/menuItem'
import picture from './objects/picture'
import pictureBasic from './objects/pictureBasic'
import quote from './objects/quote'
import socialList from './objects/socialList'
import portableTextBasic from './objects/portableTextBasic'
import video from './objects/video'

// ********************************************************
// Documents

// Multiples
import article from './documents/multiples/article'
import category from './documents/multiples/category'
import page from './documents/multiples/page'
import social from './documents/multiples/social'

// Navigation
import navPrimary from './documents/navigation/navPrimary'
import navSecondary from './documents/navigation/navSecondary'

// Singles
import articleIndex from './documents/singles/articleIndex'
import categoryIndex from './documents/singles/categoryIndex'
import home from './documents/singles/home'
import pageNotFound from './documents/singles/pageNotFound'
import siteSettings from './documents/singles/siteSettings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    address,
    cards,
    cardsPages,
    content,
    contentSection,
    cta,
    form,
    gallery,
    menuItem,
    picture,
    pictureBasic,
    quote,
    socialList,
    portableTextBasic,
    video,

    // Documents

    // Multiples
    article,
    category,
    page,
    social,

    // Navigation
    navPrimary,
    navSecondary,

    // Singles
    articleIndex,
    categoryIndex,
    home,
    pageNotFound,
    siteSettings
  ])
})
