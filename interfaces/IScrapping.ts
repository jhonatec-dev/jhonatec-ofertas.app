// import z from 'zod'

// export const ICategorySchema = z.object({
//   _id: z.string().optional(),
//   name: z.string()
// })
export interface ICategory {
  _id?: string
  name: string
}

// export type ICategory = z.infer<typeof ICategorySchema>

// export const ISellerSchema = z.object({
//   _id: z.string().optional(),
//   name: z.string(),
//   logo: z.string()
// })

export interface ISeller {
  _id?: string
  name: string
  logo: string
}

// export type ISeller = z.infer<typeof ISellerSchema>

// export const ILinkSchema = z.object({
//   _id: z.string().optional(),
//   url: z.string(),
//   bestFinalPrice: z.number(),
//   bestWholePrice: z.number(),
//   bestPriceDate: z.date(),
//   actualFinalPrice: z.number(),
//   actualWholePrice: z.number(),
//   actualPriceDate: z.date(),
//   idSeller: z.string()
// })

export interface ILink {
  _id?: string
  url: string
  bestFinalPrice: number
  bestWholePrice: number
  bestPriceDate: Date
  actualFinalPrice: number
  actualWholePrice: number
  actualPriceDate: Date
  idSeller:  ISeller
}

// export type ILink = z.infer<typeof ILinkSchema>

// export const IItemSchema = z.object({
//   _id: z.string().optional(),
//   title: z.string(),
//   description: z.string(),
//   serial: z.string(),
//   image: z.string(),
//   idCategory: z.string(),
//   links: z.array(ILinkSchema)
// })

export interface IItem {
  _id?: string
  title: string
  description: string
  serial: string
  image: string
  idCategory: ICategory
  urlVideo: string
  links: ILink[]
}

// export type IItem = z.infer<typeof IItemSchema>
