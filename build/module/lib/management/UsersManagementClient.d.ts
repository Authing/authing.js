import { PagedUsers, ExtendUser, User } from './../../types/graphql';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/graphql';
export declare class UsersManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 删除用户
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    delete(userId: string): Promise<any>;
    /**
     * 批量删除用户
     *
     * @param {string[]} userIds
     * @returns
     * @memberof UsersManagementClient
     */
    deleteMany(userIds: string[]): Promise<any>;
    /**
     * 获取用户详情
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    get(userId: string): Promise<ExtendUser>;
    /**
     * page: 页码数, 从 0 开始
     *
     * @param {{ page: number, count: number }} options
     * @returns
     * @memberof UsersManagementClient
     */
    list(page?: number, count?: number): Promise<PagedUsers>;
    /**
     *
     * 以管理员身份创建用户
     * @param {{
     *     userInfo: UserRegisterInput,
     *     invitationCode?: string,
     *     keepPassword?: boolean
     *   }} options
     * @returns
     * @memberof UsersManagementClient
     */
    create(options: {
        userInfo: UserRegisterInput;
        invitationCode?: string;
        keepPassword?: boolean;
    }): Promise<ExtendUser>;
    /**
     * 建立跨用户池的用户关联
     *
     * maxAge 单位为 s
     *
     * @param {{
     *     sourceUserPoolId: string,
     *     sourceUserId: string,
     *     targetUserPoolId: string,
     *     targetUserId: string,
     *     maxAge: number
     *   }} options
     * @memberof UsersManagementClient
     */
    createInterConnection(options: {
        sourceUserPoolId: string;
        sourceUserId: string;
        targetUserPoolId: string;
        targetUserId: string;
        maxAge: number;
    }): Promise<any>;
    /**
     * 查询用户池具备的跨用户池关联能力
     *
     * @returns
     * @memberof UsersManagementClient
     */
    interConnections(): Promise<any>;
    /**
     * 管理员让用户强制登录，无需检测任何账号密码、验证码
     *
     * @memberof UsersManagementClient
     */
    passwordLessForceLogin(userId: string): Promise<any>;
    /**
     *
     *
     * @memberof UsersManagementClient
     */
    createUserWithoutAuthentication(userInfo: UserRegisterInput, forceLogin?: boolean): Promise<User>;
}
