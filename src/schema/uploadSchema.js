export const uploadTypeDefs = `

type Upload {
  id: ID!
  name: String
  upload: Object
}


type Query {
  uploads: [Upload] 
}
`