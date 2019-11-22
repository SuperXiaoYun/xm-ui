<template>
<div style="margin:0 auto;font-weight: bold;">
    <Layout>
            <Header>
                <div>
                    我的订单
                </div>
            </Header>
            <Content :style="{padding: '0 20px'}">
                <el-row class="blackFontL">
                    <el-col :span="12">
                        当月团建
                    </el-col>
                    <el-col :span="12">
                        全部
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        {{currentTeamBuilding}}
                    </el-col>
                    <el-col :span="12">
                        {{total}}
                    </el-col>
                </el-row>
                <el-row class="mgt10">
                    <el-col :span="8">
                        团队奖励
                    </el-col>
                    <el-col :span="8">
                        本月团队单数
                    </el-col>
                    <el-col :span="8">
                        团队提成
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        {{curMonth.award}}元
                    </el-col>
                    <el-col :span="8">
                        {{curMonth.num}}单
                    </el-col>
                    <el-col :span="8">
                        {{curMonth.deduct}}元
                    </el-col>
                </el-row>
                <el-row class="grayFont mgt10">
                    <el-col :span="8">
                        上月团队奖励
                    </el-col>
                    <el-col :span="8">
                        上月团队单数
                    </el-col>
                    <el-col :span="8">
                        上月团队提成
                    </el-col>
                </el-row>
                <el-row class="grayFont">
                    <el-col :span="8">
                        {{previousMonth.award}}元
                    </el-col>
                    <el-col :span="8">
                        {{previousMonth.num}}单
                    </el-col>
                    <el-col :span="8">
                        {{previousMonth.deduct}}元
                    </el-col>
                </el-row>
                <el-row class="mgt10">
                    <el-col :span="8">
                        下月每单提成
                    </el-col>
                    <el-col :span="8">
                        升级还需团建
                    </el-col>
                    <el-col :span="8">
                        升级每单提成
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        {{nextMonth.singleDeduct}}%
                    </el-col>
                    <el-col :span="8">
                        {{nextMonth.needNum}}
                    </el-col>
                    <el-col :span="8">
                        {{nextMonth.upDeduct}}%
                    </el-col>
                </el-row>
                <List item-layout="vertical">
                    <ListItem v-for="item in data" :key="item.key">
                        <ListItemMeta :avatar="item.avatar" :title="item.phone" :description="item.joinDate" />
                        <template slot="extra">
                            {{ item.content }}
                        </template>
                    </ListItem>
                </List>
            </Content>
            <Footer class="layout-footer-center">2019-11-21 &copy; Fish</Footer>
        </Layout>
</div>
</template>

<style>
    .blackFontL{
        font-size: large;
    }
    .grayFont{
        color: gray;
    }
    .mgt10{
        margin-top: 10px;
    }
</style>

<script scoped>
 export default {
        data () {
            return {
                currentMonthRate:20,
                currentTeamBuilding:2,
                total:12,
                curMonth:{
                    award:'2*2=4',
                    num:4,
                    deduct:8
                },
                previousMonth:{
                    award:'2*2=4',
                    num:3,
                    deduct:13
                },
                nextMonth:{
                    singleDeduct:20,
                    needNum:3,
                    upDeduct:30
                },
                data: [
                    {
                        key:1,
                        phone: '186****5502',
                        joinDate: '2019-11-21加入',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '订单数量:2'
                    },
                    {
                        key:2,
                        phone: '186****5502',
                        joinDate: '2019-11-21加入',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '订单数量:2'
                    },
                    {
                        key:3,
                        phone: '186****5502',
                        joinDate: '2019-11-21加入',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '订单数量:2'
                    }
                ]
            }
        },
        methods:{
            handl(){
                
            }
        }
    }
</script>
