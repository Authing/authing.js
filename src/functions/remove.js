export function remove(_id, operator) {
  if (!_id) {
    throw Error("_id is not provided");
  }

  return this.UserServiceGql.request({
    operationName: 'removeUsers',
    query: `mutation removeUsers($ids: [String], $registerInClient: String, $operator: String) {
      removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {
        _id
      }
    }`,
    variables: {
      ids: [_id],
      registerInClient: this.userPoolId,
      operator
    }
  });
}