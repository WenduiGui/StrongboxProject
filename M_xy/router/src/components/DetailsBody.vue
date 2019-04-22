<template>
    <div class="Detabody">
        <div class="body_top">
            <ul>
                <li v-for="item,index in list">
                    <span class="boxname">{{item.name}}</span>
                    <h5 class="topbox">{{item.box}}</h5>
                    <img :src="item.url" alt="">
                 </li>
            </ul>
        </div>
        <div class="body_bottom">
            <div class="number">
                <p class="serial">{{serial}}</p>
                <h5 class="serial_number">{{number}}</h5>
            </div>
            <div class="Ip">
                <p class="equipment_Ip">{{Ip}}</p>
                <h5 class="Ip_number">{{Ip_number}}</h5>
            </div>
            <div class="firmware">
                <p class="Firmware_version">{{Firmware_version}}</p>
                <h5 class="Edition">{{Edition}}</h5>
            </div>
            <div class="Connect">
                <p class="state">{{state}}</p>
                <h5 class="true">{{Yes}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    name:"保险箱名称",
                    box:"MIKO保险箱",
                    url:require("../assets/back-2.png")
                },
                {
                    name:"品牌",
                    box:"三星",
                }
            ],
            serial:"序列号",
            number:"GFRGB44FDFD5FD",
            Ip:"设备Ip",
            Ip_number:"192.168.1.1",
            Firmware_version:"固件版本",
            Edition:"V2.01245",
            state:"连接状态",
            Yes:"已连接",
        }
    }

}
</script>

<style>
.Detabody{
    width: 7.5rem;
    height: 11.08rem;
    background-color: #f5f5f7;
}
.Detabody .body_top{
    width: 7.5rem;
    height: 2.22rem;
    background-color: #ffffff;
}
.Detabody .body_top li{
    list-style: none;
    width: 7.5rem;
    height: 1.1rem;
    border-bottom:1px solid #d8d8d8;
    box-sizing: border-box;
}
.Detabody .body_top .boxname{
    font-size: 0.26rem;
    float: left;
    margin-left: 0.3rem;
    color: #686868;
    line-height: 1.1rem;
}
.Detabody .body_top .topbox{
    font-size: 0.26rem;
    float: left;
    line-height: 1.1rem;
    margin-left: 3.32rem;
}
.Detabody .body_top img{
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.28rem;
}
.Detabody .body_bottom{
    width: 7.5rem;
    height: 4.44rem;
    background-color: #ffffff;
    margin-top: 0.22rem;
}
.Detabody .body_bottom .number{
    width: 7.2rem;
    height: 1.12rem;
    margin-left: 0.3rem;
    border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
}
.Detabody .body_bottom .number .serial{
    font-size: 0.27rem;
    line-height: 1.12rem;
    color: #686868;
    float: left;
}
.Detabody .body_bottom .number .serial_number{
    float: right;
    font-size: 0.23rem;
    color: black;
    margin-right: 0.3rem;
    line-height: 1.12rem;
}
.Detabody .body_bottom .Ip{
    width: 7.2rem;
    height: 1.12rem;
    margin-left: 0.3rem;
    border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
}
.Detabody .body_bottom .Ip .equipment_Ip{
    font-size: 0.27rem;
    line-height: 1.12rem;
    color: #686868;
    float: left;
}
.Detabody .body_bottom .Ip .Ip_number{
    float: right;
    font-size: 0.23rem;
    color: black;
    margin-right: 0.3rem;
    line-height: 1.12rem;
}
.Detabody .body_bottom .firmware{
    width: 7.2rem;
    height: 1.12rem;
    margin-left: 0.3rem;
    border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
}
.Detabody .body_bottom .firmware .Firmware_version{
    font-size: 0.27rem;
    line-height: 1.12rem;
    color: #686868;
    float: left;
}
.Detabody .body_bottom .firmware .Edition{
    float: right;
    font-size: 0.23rem;
    color: black;
    margin-right: 0.3rem;
    line-height: 1.12rem;
}
.Detabody .body_bottom .Connect{
    width: 7.2rem;
    height: 1.12rem;
    margin-left: 0.3rem;
    border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
}
.Detabody .body_bottom .Connect .state{
    font-size: 0.27rem;
    line-height: 1.12rem;
    color: #686868;
    float: left;
}
.Detabody .body_bottom .Connect .true{
    float: right;
    font-size: 0.23rem;
    color: black;
    margin-right: 0.3rem;
    line-height: 1.12rem;
}
</style>
