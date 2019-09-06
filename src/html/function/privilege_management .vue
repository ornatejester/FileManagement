<template>
  <div class="all_privilege_management">
    <h2>修改权限</h2>
    <div class="top1" v-show="IsChange">
      <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
        <el-form-item label="请输入用户工号:">
          <el-input placeholder="请输入用户工号" v-model="UserId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="username">
      <!--<span style="font-size: 20px;">工号：{{id}},权限如下</span>-->
    </div>
    <div class="ManagementShowTable" v-show="IsChange">
      <template>
        <el-table
          :data="tableData4"
          style="width: 95%;height:500px;margin: auto;"
          max-height="450">
          <!--<el-table-column-->
            <!--prop="username"-->
            <!--label="姓名"-->
            <!--width="180">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="permitInfo"
            label="权限"
            width="300">
          </el-table-column>
          <el-table-column
            prop="permitName"
            label="功能">
          </el-table-column>
          <!--<el-table-column-->
            <!--label="操作"-->
            <!--width="240">-->
            <!--<template slot-scope="scope">-->
              <!--<el-button-->
                <!--type="text"-->
                <!--size="small"-->
                <!--@click.native.prevent="deleteRow(scope.$index, tableData4)">-->
                <!--删除该权限-->
              <!--</el-button>-->
            <!--</template>-->
          <!--</el-table-column>-->
        </el-table>
      </template>
    </div>
    <div class="ManagementChange" v-show="!IsChange">
      <el-table
        ref="multipleTable"
        :data="ManagenentTableData"
        tooltip-effect="dark"
        border
        style="width: 90%;margin: auto;margin-top: 20px;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="140">
        </el-table-column>
        <!--<el-table-column-->
          <!--label="日期"-->
          <!--width="400"-->
          <!--prop="date">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="name"
          label="权限"
          style="text-align: center">
        </el-table-column>
      </el-table>
      <template>
        <span>默认权限：
        <el-checkbox-group  style="margin-top: 15px">
              <el-checkbox label="我的档案" disabled style=""></el-checkbox>
        </el-checkbox-group>
        </span>
      </template>

    </div>



    <div class="add_privilege" v-show="isqueryed" style="margin-top: 20px">
      <el-form :inline="true" class="demo-form-inline">
      <!--<el-form-item label="文化程度" prop="region" style="margin-top: 10px;">-->
        <!--<el-select placeholder="请选择" style="width: 418px">-->
          <!--<el-option label="本科" value="本科"></el-option>-->
          <!--<el-option label="大专" value="大专"></el-option>-->
          <!--<el-option label="研究生" value="研究生"></el-option>-->
          <!--<el-option label="博士生" value="博士生"></el-option>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
        <el-button type="primary" style="width: 150px;margin-top: 10px;" @click="ChangePrivilege" v-show="IsChange">更改用户权限</el-button>
        <el-button type="primary" style="width: 150px;margin-top: 10px;" @click="SureChangePrivilege" v-show="!IsChange">确定</el-button>
        <el-button type="primary" style="width: 150px;margin-top: 10px;" @click="CancelChangePrivilege" v-show="!IsChange">取消</el-button>
      </el-form>

    </div>

    </div>
</template>

<script>
  import axios from '../../Axios/Axios'
  export default {
    data() {
      return {
        //是否修改权限
        IsChange:true,
        UserId:'',
        isqueryed:false,
        tableData4:[],
        //布局参数
        formInline: {
          user: '',
          region: ''
        },
        //查看自己档案是默认存在的功能
        ManagenentTableData: [{
          name: '添加档案',
        }, {
          name: '查询履历',
        }, {
          name: '编辑档案',
        }, {
          name: '查询档案',
        }, {
          name: '档案变更记录',
        }, {
          name: '权限管理',
        },
        ],
        //用户新选择的权限数组
        multipleSelection: [],
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //修改权限
      ChangePrivilege(){
        // console.log(this.privilege);
        this.IsChange=false
      },
      //查询权限
      async query(){
        var newdata;
        await axios.post('/permit/selectrolepermit',
          {
            id: this.UserId
          }
        ).then(response =>
          newdata = response.data
        )
        console.log("权限数组为"+newdata)
        //覆盖之前的值
        if(newdata===null){
          this.$message='未查到用户权限信息'
        }
        else {

          this.tableData4=[]
          this.tableData4=newdata
          this.isqueryed=true
        }
      },
      //删除权限
      deleteRow(index, tableData4){
        this.tableData4.splice(index, 1);
      },
      //确定重置权限
      async SureChangePrivilege(){
        // console.log("重置用户的权限"+JSON.stringify(this.multipleSelection));
        var List= []
        for (var p in this.multipleSelection){
          List.push(this.multipleSelection[p].name)
        }
        List.push("我的档案")
        // console.log("重置用户的权限"+List[0]);
        var IsSuccess=false
        await axios.post('/permit/updaterolepermit',
          {
            id: this.UserId,
            permits:List
          }
        ).then(response => IsSuccess = response.status1)
        // console.log("用户的权限修改是否成功：："+IsSuccess);
        if(IsSuccess==='success'){
          this.$message='修改权限成功'
        }
        else{
          this.$message='修改权限失败'
        }

      },
      CancelChangePrivilege(){
        this.IsChange=true
      }

    }
  }
</script>

<style>
    body {

    }
    .top1{
      margin-top: 10px;
    }
    .showtable{
      margin-top: 10px;
    }
    .ManagementChange{
      width: 95%;
      margin: auto;
      height: 470px;
      border:1px solid black;
    }
</style>


