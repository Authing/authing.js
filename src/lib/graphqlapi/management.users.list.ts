
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const users =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) => {
  const query = `query users($registerInClient: String, $page: Int, $count: Int, $populate: Boolean){
    users(registerInClient: $registerInClient, page: $page, count: $count, populate: $populate){
        list{
            _id
            email
            unionid
            openid
            emailVerified
            phone
            phoneVerified
            username
            nickname
            company
            photo
            browser
            device
            password
            registerInClient
            registerMethod
            oauth
            token
            tokenExpiredAt
            loginsCount
            lastLogin
            lastIP
            signedUp
            blocked
            isDeleted
            name
            givenName
            familyName
            middleName
            profile
            preferredUsername
            website
            gender
            birthdate
            zoneinfo
            locale
            address
            formatted
            streetAddress
            locality
            region
            postalCode
            country
            updatedAt
            customData
            metadata
        }
        totalCount
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
