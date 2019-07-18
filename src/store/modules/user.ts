import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store/index.ts'

export interface UserState {
    token: string
    account: string
    id: string
    name: string
    avatar: string
    introduction: string
    email: string
    phone: string
    level: number
}

@Module({ dynamic: true, name: 'user', store })
class User extends VuexModule implements UserState {
    public token = ''
    public account = '13071163737'
    public id = '1001001'
    public name = '郝鹏SAMA'
    public avatar = ''
    public introduction = '来一个陈吧，来一个斯卡蒂吧，来一个星熊吧，来一个银灰吧'
    public email = 'swingsource@163.com'
    public phone = '13071163737'
    public level = 37

    @Mutation
    private SET_TOKEN (token: string) {
        this.token = token
    }

    @Mutation
    private SET_ACCOUNT (account: string) {
        this.account = account
    }

    @Mutation
    private SET_Id (id: string) {
        this.id = id
    }

    @Mutation
    private SET_NAME (name: string) {
        this.name = name
    }

    @Mutation
    private SET_AVATAR (avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    private SET_INTRODUCTION (introduction: string) {
        this.introduction = introduction
    }

    @Mutation
    private EMAIL (email: string) {
        this.email = email
    }

    @Mutation
    private PHONE (phone: string) {
        this.phone = phone
    }

    @Mutation
    private LEVEL (level: number) {
        this.level = level
    }
}

export const UserModule = getModule(User)

