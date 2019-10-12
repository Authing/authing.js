export function removeUserFromRole(options) {
  if (!options) {
    throw Error('options is not provided.');
  }
  const variables = {
    client: this.userPoolId,
    user: options.user,
    group: options.roleId
  };

  return this.FetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: 'removeUserFromGroup',
      query: `
      mutation RemoveUserFromGroup(
        $group: String!
        $client: String!
        $user: String!
      ) {
        removeUserFromGroup(
          group: $group
          client: $client
          user: $user
        ) {
          _id,
          group {
            _id
          },
          client {
            _id
          },
          user {
            _id
          }
        }
      }
    `,
      variables
    });
  });
}
