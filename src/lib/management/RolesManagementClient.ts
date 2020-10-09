import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { Role } from '../../types/graphql.v2';
import {
  assignRole,
  addRole,
  roles,
  role,
  roleWithUsers,
  updateRole,
  revokeRole,
  deleteRole,
  deleteRoles
} from '../graphqlapi';

export class RolesManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * @description 获取用户池角色列表
   *
   * @param code 角色唯一标志
   * @param options
   *
   */
  async detail(code: string): Promise<DeepPartial<Role>> {
    const { role: data } = await role(this.graphqlClient, this.tokenProvider, {
      code
    });
    return data;
  }

  /**
   * @description 获取用户池角色列表
   *
   */
  async list(page: number = 1, limit: number = 10) {
    const { roles: data } = await roles(
      this.graphqlClient,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  /**
   * @description 添加角色
   *
   */
  async create(code: string, description?: string, parent?: string) {
    const res = await addRole(this.graphqlClient, this.tokenProvider, {
      code,
      parent,
      description
    });
    return res.createRole;
  }

  /**
   * @description 修改角色
   *
   */
  async update(
    code: string,
    input: {
      description?: string;
      newCode?: string;
    }
  ) {
    const { description, newCode } = input;
    const { updateRole: data } = await updateRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        description,
        newCode
      }
    );
    return data;
  }

  /**
   * @description 删除角色
   *
   */
  async delete(code: string) {
    const { deleteRole: data } = await deleteRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data;
  }

  /**
   * @description 删除角色
   *
   */
  async deleteMany(codeList: string[]) {
    const { deleteRoles: data } = await deleteRoles(
      this.graphqlClient,
      this.tokenProvider,
      {
        codes: codeList
      }
    );
    return data;
  }

  /**
   * @description 获取用户列表
   *
   */
  async listUsers(code: string) {
    const { role: data } = await roleWithUsers(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data;
  }

  /**
   * @description 添加用户
   *
   */
  async addUsers(code: string, userIds: string[]) {
    const res = await assignRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds
    });
    return res.assignRole;
  }

  /**
   * @description 移除用户
   *
   */
  async removeUsers(code: string, userIds: string[]) {
    const res = await revokeRole(this.graphqlClient, this.tokenProvider, {
      roleCode: code,
      userIds
    });
    return res.revokeRole;
  }
}
