// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
  /**
   * About field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  about: prismicT.RichTextField;
  /**
   * History of ramen field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.history
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  history: prismicT.RichTextField;
  /**
   * Impression video field in *About*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: about.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  video: prismicT.LinkToMediaField;
  /**
   * clicksound field in *About*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: about.audio
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  audio: prismicT.LinkToMediaField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AboutDocumentData>,
    "about",
    Lang
  >;
/** Content for Menu documents */
interface MenuDocumentData {
  /**
   * Ramen field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  ramen: prismicT.GroupField<Simplify<MenuDocumentDataRamenItem>>;
  /**
   * Ramen Toppings field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen_toppings[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  ramen_toppings: prismicT.GroupField<
    Simplify<MenuDocumentDataRamenToppingsItem>
  >;
  /**
   * Drinks field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.drinks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  drinks: prismicT.GroupField<Simplify<MenuDocumentDataDrinksItem>>;
  /**
   * Side Dishes field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.side_dishes[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  side_dishes: prismicT.GroupField<Simplify<MenuDocumentDataSideDishesItem>>;
  /**
   * Curry field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.curry[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  curry: prismicT.GroupField<Simplify<MenuDocumentDataCurryItem>>;
  /**
   * Deserts field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.deserts[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  deserts: prismicT.GroupField<Simplify<MenuDocumentDataDesertsItem>>;
}
/**
 * Item in Menu → Ramen
 *
 */
export interface MenuDocumentDataRamenItem {
  /**
   * title field in *Menu → Ramen*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Ramen*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Ramen*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Ramen*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.ramen[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Ramen*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.ramen[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Item in Menu → Ramen Toppings
 *
 */
export interface MenuDocumentDataRamenToppingsItem {
  /**
   * title field in *Menu → Ramen Toppings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen_toppings[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Ramen Toppings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen_toppings[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Ramen Toppings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.ramen_toppings[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Ramen Toppings*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.ramen_toppings[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Ramen Toppings*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.ramen_toppings[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Item in Menu → Drinks
 *
 */
export interface MenuDocumentDataDrinksItem {
  /**
   * title field in *Menu → Drinks*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.drinks[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Drinks*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.drinks[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Drinks*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.drinks[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Drinks*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.drinks[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Drinks*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.drinks[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Item in Menu → Side Dishes
 *
 */
export interface MenuDocumentDataSideDishesItem {
  /**
   * title field in *Menu → Side Dishes*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.side_dishes[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Side Dishes*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.side_dishes[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Side Dishes*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.side_dishes[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Side Dishes*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.side_dishes[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Side Dishes*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.side_dishes[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Item in Menu → Curry
 *
 */
export interface MenuDocumentDataCurryItem {
  /**
   * title field in *Menu → Curry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.curry[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Curry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.curry[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Curry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.curry[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Curry*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.curry[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Curry*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.curry[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Item in Menu → Deserts
 *
 */
export interface MenuDocumentDataDesertsItem {
  /**
   * title field in *Menu → Deserts*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.deserts[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * description field in *Menu → Deserts*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.deserts[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Deserts*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.deserts[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * spice field in *Menu → Deserts*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: not-spicy
   * - **API ID Path**: menu.deserts[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"not-spicy" | "spicy" | "very-spicy", "filled">;
  /**
   * diet field in *Menu → Deserts*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: omnivore
   * - **API ID Path**: menu.deserts[].diet
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  diet: prismicT.SelectField<"omnivore" | "vegetarian" | "vegan", "filled">;
}
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  parent: prismicT.RelationField<"page">;
  /**
   * background field in *Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.background[]
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  background: prismicT.GroupField<Simplify<PageDocumentDataBackgroundItem>>;
  /**
   * doors field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.doors
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  doors: prismicT.ImageField<never>;
  /**
   * littleText field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.littletext
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  littletext: prismicT.ImageField<never>;
  /**
   * Bottom Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.bottom_image
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  bottom_image: prismicT.ImageField<never>;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Layout and images
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Item in Page → background
 *
 */
export interface PageDocumentDataBackgroundItem {
  /**
   * image field in *Page → background*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.background[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | ContactSlice
  | AboutSlice
  | HomeSlice
  | HowToEatRamenSlice
  | MenuSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  siteTitle: prismicT.RichTextField;
  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismicT.ImageField<never>;
  /**
   * Street field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.street
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  street: prismicT.RichTextField;
  /**
   * city field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  city: prismicT.RichTextField;
  /**
   * tram field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.tram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tram: prismicT.RichTextField;
  /**
   * phone field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  phone: prismicT.RichTextField;
  /**
   * mail field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.mail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  mail: prismicT.RichTextField;
  /**
   * open hours field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.openHours
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  openHours: prismicT.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | AboutDocument
  | MenuDocument
  | PageDocument
  | SettingsDocument;
/**
 * Primary content in About → Primary
 *
 */
interface AboutSliceDefaultPrimary {
  /**
   * image1 field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image1
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image1: prismicT.ImageField<never>;
  /**
   * fig1 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.fig1
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  fig1: prismicT.RichTextField;
  /**
   * image2 field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image2: prismicT.ImageField<never>;
  /**
   * fig2 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.fig2
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  fig2: prismicT.RichTextField;
  /**
   * image3 field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image3
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image3: prismicT.ImageField<never>;
  /**
   * fig3 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.fig3
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  fig3: prismicT.RichTextField;
}
/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *About*
 *
 */
type AboutSliceVariation = AboutSliceDefault;
/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: `About`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSlice = prismicT.SharedSlice<"about", AboutSliceVariation>;
/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *Contact*
 *
 */
type ContactSliceVariation = ContactSliceDefault;
/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: `Contact`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSlice = prismicT.SharedSlice<
  "contact",
  ContactSliceVariation
>;
/**
 * Primary content in Home → Primary
 *
 */
interface HomeSliceDefaultPrimary {
  /**
   * image1 field in *Home → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.primary.image1
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image1: prismicT.ImageField<never>;
  /**
   * label1 field in *Home → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.primary.label1
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label1: prismicT.RichTextField;
  /**
   * image2 field in *Home → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.primary.image2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image2: prismicT.ImageField<never>;
  /**
   * label2 field in *Home → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.primary.label2
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label2: prismicT.RichTextField;
  /**
   * littletext field in *Home → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.primary.littletext
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  littletext: prismicT.ImageField<never>;
}
/**
 * Default variation for Home Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HomeSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Home*
 *
 */
type HomeSliceVariation = HomeSliceDefault;
/**
 * Home Shared Slice
 *
 * - **API ID**: `home`
 * - **Description**: `Home`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeSlice = prismicT.SharedSlice<"home", HomeSliceVariation>;
/**
 * Item in HowToEatRamen → Items
 *
 */
export interface HowToEatRamenSliceDefaultItem {
  /**
   * image field in *HowToEatRamen → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: how_to_eat_ramen.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * description field in *HowToEatRamen → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_to_eat_ramen.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
}
/**
 * Default variation for HowToEatRamen Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HowToEatRamenSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HowToEatRamenSliceDefaultItem>
>;
/**
 * Slice variation for *HowToEatRamen*
 *
 */
type HowToEatRamenSliceVariation = HowToEatRamenSliceDefault;
/**
 * HowToEatRamen Shared Slice
 *
 * - **API ID**: `how_to_eat_ramen`
 * - **Description**: `HowToEatRamen`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HowToEatRamenSlice = prismicT.SharedSlice<
  "how_to_eat_ramen",
  HowToEatRamenSliceVariation
>;
/**
 * Primary content in Menu → Primary
 *
 */
interface MenuSliceDefaultPrimary {
  /**
   * image1 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image1
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image1: prismicT.ImageField<never>;
  /**
   * image2 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image2: prismicT.ImageField<never>;
  /**
   * image3 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image3
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image3: prismicT.ImageField<never>;
  /**
   * image4 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image4
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image4: prismicT.ImageField<never>;
  /**
   * image5 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image5
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image5: prismicT.ImageField<never>;
  /**
   * image6 field in *Menu → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.primary.image6
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image6: prismicT.ImageField<never>;
}
/**
 * Item in Menu → Items
 *
 */
export interface MenuSliceDefaultItem {
  /**
   * type field in *Menu → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].type
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  type: prismicT.SelectField<
    "Ramen" | "Topping" | "Drink" | "Side" | "Curry" | "Desert"
  >;
  /**
   * dish field in *Menu → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].dish
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  dish: prismicT.RichTextField;
  /**
   * description field in *Menu → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * price field in *Menu → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismicT.RichTextField;
  /**
   * filter field in *Menu → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].filter
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  filter: prismicT.SelectField<"Vegetarian" | "Vegan" | "Neither">;
  /**
   * Spice field in *Menu → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].spice
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  spice: prismicT.SelectField<"NotSpicy" | "Spicy" | "VerySpicy">;
}
/**
 * Default variation for Menu Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<MenuSliceDefaultPrimary>,
  Simplify<MenuSliceDefaultItem>
>;
/**
 * Slice variation for *Menu*
 *
 */
type MenuSliceVariation = MenuSliceDefault;
/**
 * Menu Shared Slice
 *
 * - **API ID**: `menu`
 * - **Description**: `Menu`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuSlice = prismicT.SharedSlice<"menu", MenuSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AboutDocumentData,
      AboutDocument,
      MenuDocumentData,
      MenuDocumentDataRamenItem,
      MenuDocumentDataRamenToppingsItem,
      MenuDocumentDataDrinksItem,
      MenuDocumentDataSideDishesItem,
      MenuDocumentDataCurryItem,
      MenuDocumentDataDesertsItem,
      MenuDocument,
      PageDocumentData,
      PageDocumentDataBackgroundItem,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SettingsDocumentData,
      SettingsDocument,
      AllDocumentTypes,
      AboutSliceDefaultPrimary,
      AboutSliceDefault,
      AboutSliceVariation,
      AboutSlice,
      ContactSliceDefault,
      ContactSliceVariation,
      ContactSlice,
      HomeSliceDefaultPrimary,
      HomeSliceDefault,
      HomeSliceVariation,
      HomeSlice,
      HowToEatRamenSliceDefaultItem,
      HowToEatRamenSliceDefault,
      HowToEatRamenSliceVariation,
      HowToEatRamenSlice,
      MenuSliceDefaultPrimary,
      MenuSliceDefaultItem,
      MenuSliceDefault,
      MenuSliceVariation,
      MenuSlice,
    };
  }
}
