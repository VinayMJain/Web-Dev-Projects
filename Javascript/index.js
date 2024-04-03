function func1(){
    var name=form1.txt1.value
    if (name==''){
        alert("Please Enter Name")
        form1.txt1.focus();
        return false
    }
    else{
        alert("GO ahead!!!")
    }
}

function result(){
    var m1=eval(mks.m1.value)
    var m2= eval(mks.m2.value)
    var m3= eval(mks.m3.value)
    mks.ttlmks.value=(m1+m2+m3)
    mks.per.value= ((m1+m2+m3)/3+'%')
    
}