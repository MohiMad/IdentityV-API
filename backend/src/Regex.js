module.exports = {
    IMAGE: /https?:.+?\.png|jpg/i,
    IMAGES: /https?.+?\.png|jpg/gi,
    DIVS_WITH_CLASS_PI_DATA_VALUE_PI_FONT: /(?<=class="pi-data-value pi-font">).+?(?=<\/div>)/g,
    H3_ELEMENTS_WITH_CLASS_PI_DATA_LABEL_PI_SECONDARY: /(?<=class="pi-data-label pi-secondary-font">).+?(?=<\/h3>)/g,
    IMG_ELEMENT_WITH_CLASS_PI_IMAGE_THUMBNAIL: /<img.*class="pi-image-thumbnail"/,
    ASIDE_ELEMENT_FOR_EMOTES_LAYOUT: /portable-infobox pi-background pi-border-color pi-theme-wikia pi-layout-default.+?<\/aside>/gs,
    GIF: /https?.+?\.gif/i,
    GIFS: /https?.+?\.gif/gi,
    /** Matches all \s  -  _ %20 */
    WORDS_CONNECTION_CHARACTERS: /-|_|%20|\s/g,
    UNDERLINES: /_/g,
    HTML_LINEBREAKS: /<br>/g,
    HTML_OPENING_AND_CLOSING_TAGS: /(<.+?>|<\/.+?>)/g,
    TABLE_WITH_CLASS_ARTICLE_TABLE: /<table class="article-table">.+?<\/table>/gs,
    ABILITIY_SEPARATORS: /\s\|\s|\s&gt;\s/g,
    HTML_ENTITIES: /&#\d+;\d?/g,
    TRAIT_DESCRIPTION_CONTAINER_ELEMENT: /mw-collapsible-content.+?</,
    ALL_LI_ELEMENTS: /<li>(.|\n)+?<\/li>/g,

}