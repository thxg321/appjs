document.getElementById("params").setAttribute("placeholder","Body表单(不填默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function escape(val){
return getescape(val);
};

function alert(val){
api.alert({msg:val});
};
